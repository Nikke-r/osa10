import React, { useContext } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 20,
        padding: 10
    },
});

const AppBarTabs = () => {
    const { data } = useQuery(GET_AUTHORIZED_USER);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const signOut = async () => {
        try {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
        } catch (error) {
            console.log(`Error signing out: ${error.message}`);
        }
    };

    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Link to='/'>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
            </TouchableWithoutFeedback>
            {data && data.authorizedUser !== null ?
            <>
                <TouchableWithoutFeedback>
                    <Link to='/review'>
                        <Text style={styles.text}>Create a review</Text>
                    </Link>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Link to='/ownreviews'>
                        <Text style={styles.text}>Own reviews</Text>
                    </Link>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={signOut}>
                    <Text style={styles.text}>Sign Out</Text>
                </TouchableWithoutFeedback>
            </>
            :
            <>
                <TouchableWithoutFeedback>
                    <Link to='/signin'>
                        <Text style={styles.text}>Sign In</Text>
                    </Link>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Link to='/signup'>
                        <Text style={styles.text}>Sign Up</Text>
                    </Link>
                </TouchableWithoutFeedback>
            </>}
        </View>
    );
};

export default AppBarTabs;