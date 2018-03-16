//Import libraries
import React, { Component } from 'react';
import {
  Image,
  TouchableWithoutFeedback,
  View,
  Modal
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

//Component
class AlbumDetail extends Component {
  state = {
   modalVisible: false,
  }
  componentWillMount() {
    this.albumData = this.props.albumData;
    this.AlbumURLs = this.props.AlbumURLs;
    // imageUrls={[{ url: this.albumData.url }]}
    this.index = 0;
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  updateIndex(url) {
    this.props.AlbumURLs.map((value, index) => {
     if (url === value.url) {
       this.index = index;
     }
     return false;
   });
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
          this.updateIndex(this.albumData.url);
        }}
      >
        <View style={styles.containerStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.albumData.url }}
          />
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
             <ImageViewer
               saveToLocalByLongPress={false}
               index={this.index}
               imageUrls={this.AlbumURLs}
             />
         </Modal>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  imageStyle: {
    width: null,
    flex: 1,
    height: 300
  }
};

//expose component
export default AlbumDetail;
