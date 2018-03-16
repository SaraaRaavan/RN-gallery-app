//Import libraries
import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
// import firebase from 'firebase';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// import AlbumModalView from './AlbumModalView';
import { Spinner } from './common';

//Component
class AlbumList extends Component {

  componentWillMount() {
      this.AlbumURLs = [];
  }

  renderAlbums() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    const Albums = [];
    if (this.props.sortBy === 'By Name') {
      this.props.data.map(album => {
        if (album.tags.includes(this.props.sortItem)) {
          this.AlbumURLs.push({ url: album.url });
          Albums.push(
            <AlbumDetail
              key={album.title}
              albumData={album}
              AlbumURLs={this.AlbumURLs}
            />
          );
        }
        return false;
      });
      return Albums;
    } else if (this.props.sortBy === 'By Meet') {
      this.props.data.map(album => {
        if (album['meet#'] === this.props.sortItem) {
        this.AlbumURLs.push({ url: album.url });
        Albums.push(
          <AlbumDetail
            key={album.title}
            albumData={album}
            AlbumURLs={this.AlbumURLs}
          />
        );
        }
        return false;
      });
      return Albums;
    }
  }

  render() {
    //this.renderAlbums();
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
      //<AlbumModalView imageURLs={this.AlbumURLs} />
    );
  }
}

//expose component
export default AlbumList;
