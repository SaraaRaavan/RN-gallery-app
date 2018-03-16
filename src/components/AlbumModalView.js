//Import libraries
import React from 'react';
import {
  Modal
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


//Component
const AlbumModalView = (albumData) => {
  const url = albumData.imageURLs;

  const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
      }, {
          url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
      }, {
          url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
      }];


  return (
    <Modal
      animationType="slide"
      transparent={false}
    >
       <ImageViewer imageUrls={url} />
   </Modal>

  );
};


//expose component
export default AlbumModalView;
