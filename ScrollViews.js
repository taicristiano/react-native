import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class ScrollViews extends Component {
  render() {
      let image = {
        uri: "https://facebook.github.io/react-native/img/favicon.png",
        width: 64,
        height: 64
      }
      let fontsize = 96
      return (
        <ScrollView>
          <Text style={{fontSize:fontsize}}>Scroll me plz</Text>
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Text style={{fontSize:fontsize}}>If you like</Text>
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Text style={{fontSize:fontsize}}>Scrolling down</Text>
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Text style={{fontSize:fontsize}}>What's the best</Text>
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Text style={{fontSize:fontsize}}>Framework around?</Text>
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Image source={image} />
          <Text style={{fontSize:fontsize}}>React Native</Text>
        </ScrollView>
    );
  }
}
