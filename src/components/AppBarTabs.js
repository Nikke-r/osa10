import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

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
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Link to='/'>
                    <Text style={styles.text}>Repositories</Text>
                </Link>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Link to='/signin'>
                    <Text style={styles.text}>Sign In</Text>
                </Link>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default AppBarTabs;