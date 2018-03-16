//Import libraries
import React from 'react';
import {
  Text,
  View
} from 'react-native';

//Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
      height: 40,
      marginTop: 20,
      backgroundColor: '#CCC',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#CCC',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4
  }
};

//expose component
export { Header };
