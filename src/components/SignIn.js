import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup
            .string()
            .required('Username is required'),
    password: yup 
            .string()
            .required('Password is required'),
});

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async values => {
        try {
            const data = await signIn(values);
            if (data) {
                history.push('/');
            }
        } catch (error) {
            console.log(`Error while signing in: ${error.message}`);
        }
    };

    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, isValid }) => <SignInForm onSubmit={handleSubmit} isValid={isValid} /> }
        </Formik>
    );
};

export default SignIn;