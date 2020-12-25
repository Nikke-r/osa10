import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/react-hooks';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        try {
            const { data } = await mutate({ variables: { username, password }});
            await authStorage.setAccessToken(data.authorize.accessToken);
            apolloClient.resetStore();
            return data;
        } catch (error) {
            console.log(`Error signing in: ${error.message}`);
        }
    };

    return [signIn, result];
};

export default useSignIn;