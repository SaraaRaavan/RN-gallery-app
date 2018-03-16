import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;
  return (
    <View onPress={props.onPress} style={[containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0)',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#dadada',
      position: 'relative'
  }
};

export { CardSection };
