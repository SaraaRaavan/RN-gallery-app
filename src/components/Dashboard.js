import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem';
import { Card } from './common';

class WelcomePage extends Component {


  render() {
  const category = { all: 'All', byName: 'By Name', byMeet: 'By Meet' };
    return (
        <Card>
          <Text style={styles.textStyle}>How do u want to see the photos: </Text>
          <ListItem
            name={category.all}
            onRowPress={() => Actions.albumList({ listName: category.all })}
          />
          <ListItem
            name={category.byName}
            onRowPress={() => Actions.albumList({ listName: category.byName })}
          />
          <ListItem
            name={category.byMeet}
            onRowPress={() => Actions.albumList({ listName: category.byMeet })}
          />
            <Image
              style={styles.imageStyle}
              source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/leoffice-c9db9.appspot.com/o/_DSC0812%20copy.jpg?alt=media&token=fd00cb09-26f9-491a-bbdb-ea08ea17a477' }}
            ></Image>
      </Card>
    );
  }
}
const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#fff',
    position: 'relative',
    color: 'steelblue'
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
