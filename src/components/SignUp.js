import {Formik} from 'formik';
import React from 'react';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import {useMutation} from '@apollo/react-hooks';
import {CREATE_USER} from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';
import {useHistory} from 'react-router-native';

const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
};

const validationSchema = yup.object().shape({
    username: yup.string().min(1).max(30).required('Username is required!'),
    password: yup.string().min(5).max(50).required('Password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!')
});

const SignUp = () => {
    const [createUser,] = useMutation(CREATE_USER);
    const [signIn,] = useSignIn();
    const history = useHistory();

    const onSubmit = async values => {
        try {
            const {data} = await createUser({ variables: { username: values.username, password: values.password }});
            if (data.createUser.id) {
                await signIn({ username: values.username, password: values.password });
                history.push('/');
            }
        } catch (error) {
            console.log(`Error while creating the user: ${error.message}`);
        }
    };

    return(
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignUp;
