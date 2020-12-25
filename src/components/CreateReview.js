import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import CreateReviewForm from './CreateReviewForm';
import * as yup from 'yup';
import {useMutation} from '@apollo/react-hooks';
import {CREATE_REVIEW} from '../graphql/mutations';
import {useHistory} from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
    }
});

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup.string().required('This is a required field.'),
    repositoryName: yup.string().required('This is a required field.'),
    rating: yup.number().min(0).max(100).required('Please choose a rating between 0 and 100')
});

const CreateReview = () => {
    const [createReview, { data }] = useMutation(CREATE_REVIEW);
    const history = useHistory();

    const onSubmit = values => {
        createReview({ variables: { ...values, rating: parseInt(values.rating) }});
    };

    useEffect(() => {
        if (data && data.createReview) {
            history.push(`/${data.createReview.repositoryId}`);
        }
    }, [data]);

    return(
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default CreateReview;