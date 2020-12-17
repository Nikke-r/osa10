import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as yup from 'yup';

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

    const onSubmit = values => {
        console.log(values);
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