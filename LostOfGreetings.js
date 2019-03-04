import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component
{
    render() {
        return (
            <View style={{ alignItems: 'center'}}>
                <Text>Hello { this.props.name }</Text>
            </View>
        )
    };
}

class LostOfGreetings extends Component
{
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name='Ronaldo'/>
                <Greeting name='Rooney'/>
                <Greeting name='Degea'/>
            </View>
        );
    }
}

export default LostOfGreetings;