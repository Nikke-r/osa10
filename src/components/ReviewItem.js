import {useMutation} from '@apollo/react-hooks';
import React from 'react';
import {Alert, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {useHistory} from 'react-router-native';
import theme from '../themes';
import Text from './Text';
import { DELETE_REVIEW } from '../graphql/mutations';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    ratingContainer: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reviewInfo: {
        paddingBottom: 5
    },
    reviewText: {
        width: '90%',
    },
    buttonRow: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    button: {
        color: '#fff',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        width: 150,
    }
});

const ReviewItem = ({ review, isOwn, refetch }) => {
    const history = useHistory();
    const [deleteReview,] = useMutation(DELETE_REVIEW);

    const toRepo = (id) => {
        history.push(`/${id}`);
    };

    const confirmDelete = (id) => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete the review',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel')
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        deleteReview({ variables: { id }});
                        refetch();
                    }
                }
            ]
        );  
    };

    return(
        <>
        <View style={styles.container}>
            <View style={{margin: 5}}>
                <View style={styles.ratingContainer}> 
                    <Text color='primary' fontWeight='bold'> {review.rating} </Text>
                </View>
            </View>
            <View style={{ margin: 5 }}>
                <View style={styles.reviewInfo}>
                    <Text fontWeight='bold'> { review.user ? review.user.username : review.repository.fullName} </Text>
                    <Text> {review.createdAt.split('T')[0]} </Text>
                </View>
                <View style={styles.reviewText}>
                    <Text> {review.text} </Text>
                </View>
            </View>
        </View>
        {isOwn &&
        <View style={styles.buttonRow}>
            <TouchableNativeFeedback onPress={ () => toRepo(review.repository.id)} >
                <Text fontWeight='bold' style={{ backgroundColor: theme.colors.primary, ...styles.button }}>View repository</Text>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => confirmDelete(review.id)}>
                <Text fontWeight='bold' style={{ backgroundColor: theme.colors.error, ...styles.button}}>Delete</Text>
            </TouchableNativeFeedback>
        </View>}
        </>
    );
};

export default ReviewItem;