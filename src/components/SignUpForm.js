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

const SignUpForm = ({ onSubmit }) => {
    return(
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.inputField} /> 
            <FormikTextInput name="password" placeholder="Password" style={styles.inputField} secureTextEntry />
            <FormikTextInput name="confirmPassword" placeholder="Confirm Password" style={styles.inputField} secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text style={styles.button}>Sign Up</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignUpForm;
