import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import RepositoryItem from './RepositroyItem';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const respositoryNodes = data ? data.repositories.edges.map(edge => edge.node) : [];
    
    return(
        loading ?
        <ActivityIndicator />
        :
        error ?
        <Text> Error </Text>
        :
        <FlatList 
            data={respositoryNodes}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => <RepositoryItem repository={item} />}
        />
    );
};

export default RepositoryList;