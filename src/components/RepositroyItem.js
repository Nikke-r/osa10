import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import BottomRowItem from './BottomRowItem';
import theme from '../themes';
import { useHistory } from 'react-router-native';
import * as Linking from 'expo-linking';

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
        paddingLeft: 10,
        paddingBottom: 10,
        width: '90%'
    },
    openButton: {
        backgroundColor: theme.colors.primary,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    }
});

const RepositoryItem = ({ repository, isDetails }) => {
    const history = useHistory();

    const prettifyNumbers = (number) => {
        if (number >= 1000) {
            number = Math.round(number / 100) * 100;
            number = (number / 1000).toFixed(1);
            return `${number}k`;
        } 

        return `${number}`;
    };

    const openLink = async () => {
        try {
            await Linking.openURL(repository.url);
        } catch (error) {
            console.log(`Error while opening the link: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => history.push(`/${repository.id}`)}>
                <View style={styles.row}>
                    <View>   
                        {repository.ownerAvatarUrl !== '' && <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.image} />}
                    </View>
                    <View style={styles.titlePadder}>
                        <Text testID="repoName" fontWeight='bold'>
                            {repository.fullName}
                        </Text>
                        <Text testID="repoDesc" fontSize="subheading">
                            {repository.description}
                        </Text>
                        <Text testID="repoLang" style={styles.languageContainer}>
                            {repository.language}
                        </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', ...styles.row}}>
                    <BottomRowItem
                        testID="repoRating"
                        name="Ratings"
                        count={prettifyNumbers(repository.ratingAverage)}
                    />
                    <BottomRowItem
                        name="Stars"
                        count={prettifyNumbers(repository.stargazersCount)}
                        testID="repoStars"
                    />
                    <BottomRowItem
                        name="Forks"
                        count={prettifyNumbers(repository.forksCount)}
                        testID="repoForks"
                    />
                    <BottomRowItem
                        name="Reviews"
                        count={prettifyNumbers(repository.reviewCount)}
                        testID="repoReviews"
                    />
                </View>
            </TouchableOpacity>
            {isDetails &&
            <TouchableWithoutFeedback onPress={openLink}>
                <Text fontWeight='bold' style={styles.openButton}>Open in GitHub</Text>
            </TouchableWithoutFeedback>}
        </View>
    );
};

export default RepositoryItem;