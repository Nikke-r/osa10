import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../themes';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Switch, Route } from 'react-router-native';
import SignIn from './SignIn';

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
                <Route path='/signin'>
                    <SignIn />
                </Route>
            </Switch>
        </View>
    );
};

export default Main;