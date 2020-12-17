import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import theme from '../themes';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

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
    disabled: {
        backgroundColor: theme.colors.disabled
    }
});

const SignInForm = ({ onSubmit, isValid }) => {

    const buttonStyles = [
        styles.button,
        !isValid && styles.disabled
    ];

    return(
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.inputField} />
            <FormikTextInput name="password" placeholder="Password" style={styles.inputField} secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit} disabled={!isValid}>
                <Text fontWeight='bold' style={buttonStyles}>Login</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignInForm;