import React, { Component } from 'react';
import { Image } from 'react-native';

class Bananas extends Component
{
    render() {
        let picture = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={picture} style={{ width: 193, height: 110 }}/>
        );
    }
}

export default Bananas;