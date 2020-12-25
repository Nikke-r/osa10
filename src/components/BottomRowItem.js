import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    countText: {
        fontWeight: 'bold'
    },    
});

const BottomRowItem = (props) => {
    return(
        <View style={styles.center}>
            <Text testID={props.testID} style={styles.countText}> {props.count} </Text>
            <Text> {props.name} </Text>
        </View>
    );
};

export default BottomRowItem;