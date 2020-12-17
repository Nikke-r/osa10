import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0366d6',
        borderRadius: 5,
        flexGrow: 0,
        padding: 3,
    },
    text: {
        color: 'white'
    }
});

const LanguageText = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {props.language} </Text>
        </View>
    );
};

export default LanguageText;