import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../themes';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Switch, Route } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryDetails from './RepositoryDetails';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import OwnReviews from './OwnReviews';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        flex: 1,
    }
});

const Main = () => {
    return(
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route exact path='/'>
                    <RepositoryList />
                </Route>
                <Route path='/review'>
                    <CreateReview />
                </Route>
                <Route path='/ownreviews'>
                    <OwnReviews />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/:id'>
                    <RepositoryDetails />
                </Route>
            </Switch>
        </View>
    );
};

export default Main;