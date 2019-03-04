import React, { Component } from 'react';
import { View } from 'react-native';

class Layout extends Component
{
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                aliginItems: 'stretch'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{height: 50, backgroundColor: 'skyblue'}} />
                <View style={{height: 100, backgroundColor: 'steelblue'}} />
            </View>
            // <View style={{ flex:1, flexDirection: 'row' }}>
            //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //     <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            //     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            // </View>
        );
    }
}

export default Layout;