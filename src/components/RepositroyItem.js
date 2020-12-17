import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import BottomRowItem from './BottomRowItem';
import theme from '../themes';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    titleText: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    languageContainer: {
        backgroundColor: theme.colors.primary,
        padding: 3,
        borderRadius: 5,
        alignSelf: 'flex-start',
        color: '#fff',
        marginTop: 5,
    },
    titlePadder: {
        padding: 10
    }
});

const RepositoryItem = ({ repository }) => {

    const prettifyNumbers = (number) => {
        if (number >= 1000) {
            number = Math.round(number / 100) * 100;
            number = (number / 1000).toFixed(1);
            return `${number}k`;
        } 

        return `${number}`;
    };


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.image} />
                <View style={styles.titlePadder}>
                    <Text fontWeight='bold'>
                        {repository.fullName}
                    </Text>
                    <Text fontSize="subheading">
                        {repository.description}
                    </Text>
                    <Text style={styles.languageContainer}>
                        {repository.language}
                    </Text>
                </View>
            </View>
            <View style={{ justifyContent: 'space-between', ...styles.row}}>
                <BottomRowItem
                    name="Ratings"
                    count={prettifyNumbers(repository.ratingAverage)}
                />
                <BottomRowItem
                    name="Stars"
                    count={prettifyNumbers(repository.stargazersCount)}
                />
                <BottomRowItem
                    name="Forks"
                    count={prettifyNumbers(repository.forksCount)}
                />
                <BottomRowItem
                    name="Reviews"
                    count={prettifyNumbers(repository.reviewCount)}
                />
            </View>
        </View>
    );
};

export default RepositoryItem;