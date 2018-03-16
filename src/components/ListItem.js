import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    const name = this.props.name;

    return (
      <TouchableWithoutFeedback onPress={this.props.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: '#840000'
  }
};

export default ListItem;
