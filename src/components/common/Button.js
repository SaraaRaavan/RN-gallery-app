import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, btnTextStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={btnTextStyle}>
          {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  btnTextStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export { Button };
