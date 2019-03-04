import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red'
    }
});

class Style extends Component
{
    render() {
        return (
            <View>
                <Text style={ styles.red }>just red</Text>
                <Text style={ styles.bigBlue }>just bigblue</Text>
                <Text style={ [styles.bigBlue, styles.red] }>biglue, red</Text>
                <Text style={ [styles.red, styles.bigBlue] }>red, bigBlue</Text>
            </View>
        );
    }
}

export default Style;