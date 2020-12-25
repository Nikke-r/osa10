import {useQuery} from '@apollo/react-hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import { useParams } from 'react-router-native';
import {GET_REPOSITORY_DETAILS} from '../graphql/queries';
import RepositoryItem from './RepositroyItem';
import ReviewItem from './ReviewItem';

const RepositoryDetails = () => {
    const [repository, setRepository] = useState({
        url: '',
        description: '',
        ownerAvatarUrl: '',
        fullName: '',
        language: '',
        ratingAverage: 0,
        stargazersCount: 0,
        forksCount: 0,
        reviewCount: 0,
        reviews: [],
    });
    const { id } = useParams();
    const { data, loading, fetchMore } = useQuery(GET_REPOSITORY_DETAILS, {
        fetchPolicy: 'cache-and-network',
        variables: { id: id, first: 5 }
    });

    useEffect(() => {
        if (data && data.repository) {
            setRepository(data.repository);
        }
    }, [data]);

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) return;

        fetchMore({
            query: GET_REPOSITORY_DETAILS,
            variables: {
                id: id,
                first: 5,
                after: data.repository.reviews.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repository: {
                      ...fetchMoreResult.repository,
                      reviews: {
                          ...fetchMoreResult.repository.reviews,
                          edges: [
                            ...previousResult.repository.reviews.edges,
                            ...fetchMoreResult.repository.reviews.edges,
                          ]
                      },
                    },
                };
                
                return nextResult;
            },
        });
    };

    return(
        <FlatList 
            ListHeaderComponent={() => <RepositoryItem repository={repository} isDetails={true} />}
            data={repository.reviews.edges}
            keyExtractor={item => item.node.id}
            renderItem={({ item }) => <ReviewItem key={item.node.id} review={item.node} />}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            onEndReached={handleFetchMore}
            onEndReachedThreshold={0.5}
        />
    );
};

export default RepositoryDetails;