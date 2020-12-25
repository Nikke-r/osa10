import {useQuery} from '@apollo/react-hooks';
import React from 'react';
import {FlatList} from 'react-native';
import {GET_AUTHORIZED_USER} from '../graphql/queries';
import ReviewItem from './ReviewItem';

const OwnReviews = () => {
    const { data, refetch } = useQuery(GET_AUTHORIZED_USER, {
        variables: { includeReviews: true }
    });

    const reviews = data ? data.authorizedUser.reviews.edges : [];

    return(
        <FlatList 
            data={reviews}
            keyExtractor={item => item.node.id}
            renderItem={({ item }) => <ReviewItem review={item.node} isOwn={true} refetch={refetch} />}
        />
    );
};

export default OwnReviews;