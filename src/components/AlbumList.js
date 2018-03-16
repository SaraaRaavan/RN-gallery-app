//Import libraries
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Image
} from 'react-native';
// import firebase from 'firebase';
import axios from 'axios';
import ListItem from './ListItem';
import AlbumDetail from './AlbumDetail';
import { Spinner } from './common';

//Component
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // const storage = firebase.storage();
    // const { currentUser } = firebase.auth();
    // const gsReference = storage.refFromURL('gs://leoffice-c9db9.appspot.com/');
    // storage.ref().child('16425985_809889625834614_5996831356240413430_n.jpg').getDownloadURL()
    // .then((url) => {
    //   console.log(url);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // console.log(storage);
    // const auth = firebase.auth();
    // const storageRef = firebase.storage().ref();
    // const gsReference = storageRef.storage.refFromURL('gs://leoffice-c9db9.appspot.com');
    // auth.signInAnonymously();
    // storageRef.child('_DSC0721.JPG').getDownloadURL().then((url) => {
    //   console.log(url);
    // });
    this.AlbumURLs = [];
    axios.get('https://firebasestorage.googleapis.com/v0/b/leoffice-c9db9.appspot.com/o/images.json?alt=media&token=2d73bf98-750c-40e0-a3ee-94bbc8b46fc2')
         .then(response => {
           this.loading = false;
           this.setState({ albums: response.data });
           this.data = this.state.albums;
         })
         .catch((error) => console.warn('fetch error:', error));
  }

  data = this.state.albums;
  loading = true;

  renderAlbumList() {
    const Albums = [];
    if (this.loading) {
      return <Spinner size="large" />;
    }
    if (this.props.listName === 'By Name') {
      let nameList = [];
      this.state.albums.map(album => {
        return (nameList = [...new Set([...nameList, ...album.tags])]);
      });
      return nameList.map(name =>
        <ListItem
          onRowPress={() =>
            Actions.albumView({ sortItem: name, sortBy: this.props.listName, data: this.data })
          }
          key={name}
          name={name}
        />
      );
    } else if (this.props.listName === 'By Meet') {
      let meetList = [];
      this.state.albums.map(album => (meetList.push(album['meet#'])));
      meetList = [...new Set(meetList)].sort();
      console.log(meetList);
      return meetList.map(name =>
        <ListItem
          onRowPress={() =>
            Actions.albumView({ sortItem: name, sortBy: this.props.listName, data: this.data })
          }
          key={name}
          name={name}
        />
      );
    } else if (this.props.listName === 'All') {
      this.state.albums.map(album => {
        this.AlbumURLs.push({ url: album.url });
        Albums.push(<AlbumDetail key={album.title} albumData={album} AlbumURLs={this.AlbumURLs} />);
        return false;
      });
      return Albums;
    }
  }

  render() {
    return (
        <ScrollView>
          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/leoffice-c9db9.appspot.com/o/_DSC0812%20copy.jpg?alt=media&token=fd00cb09-26f9-491a-bbdb-ea08ea17a477' }}
          ></Image>
          { this.renderAlbumList() }
        </ScrollView>
    );
  }
}
const styles = {
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
     top: 0,
     bottom: 0
  }
};
//expose component
export default AlbumList;
