import React from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../themes';

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        marginBottom: 10,
    },
    container: {
        backgroundColor: '#fff',
        padding: 10
    },
    button: {
        backgroundColor: theme.colors.primary,
        color: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        padding: 10,
    },
});

const CreateReviewForm = ({ onSubmit}) => {
    return(
        <View>
            <FormikTextInput name="ownerName" placeholder="Owner Name" style={styles.inputField} />
            <FormikTextInput name="repositoryName" placeholder="Repository Name" style={styles.inputField} />
            <FormikTextInput keyboardType="numeric" name="rating" placeholder="Rating between 0 and 100" style={styles.inputField} />
            <FormikTextInput name="text" placeholder="Review" style={styles.inputField} multiline />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text style={styles.button}>Create a review</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default CreateReviewForm;