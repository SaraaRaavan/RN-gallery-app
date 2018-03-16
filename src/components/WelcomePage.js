import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Dimensions, Image } from 'react-native';
import { Button, Card } from './common';

class WelcomePage extends Component {

  onButtonPress() {
    Actions.dashboard();
  }

  render() {
    const { textStyle, buttonStyle, viewStyle, containerStyle, imageStyle } = styles;

    return (
      <Card style={containerStyle}>
        <View style={viewStyle}>
          <Text style={textStyle}>Welcome</Text>
          <Text style={textStyle}>to</Text>
          <Text style={textStyle}>LE Office</Text>
        </View>

        <View style={buttonStyle}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Open Gallery
          </Button>
        </View>
          <Image
            style={imageStyle}
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/leoffice-c9db9.appspot.com/o/_DSC0807%20copy%203.jpg?alt=media&token=78da9221-e4a1-4305-875f-75d8d830473a' }}
          ></Image>
      </Card>
    );
  }
}
const screen = Dimensions.get('window');
console.log(screen);
const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 32,
    color: '#07c07c'
  },
  buttonStyle: {
   paddingTop: 30,
   paddingBottom: 30,
   position: 'absolute',
   backgroundColor: 'rgba(0,0,0,0)',
   bottom: 0,
   justifyContent: 'flex-start',
   flexDirection: 'row'
 },
 viewStyle: {
  backgroundColor: 'rgba(0,0,0,0)'
 },
 containerStyle: {
   //height: screen.height
   flexDirection: 'column',
   height: screen.height
 },
 imageStyle: {
   flex: 1,
   resizeMode: 'cover',
   position: 'absolute',
   top: 0,
   bottom: 0
 }
};

export default WelcomePage;
