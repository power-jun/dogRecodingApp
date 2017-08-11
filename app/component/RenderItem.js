import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import BaseStyle from '../common/BaseStyle';
import ImageLoad from 'react-native-image-placeholder';
import Icon from '../component/Icon';

import Screen from '../utils/screen';

export default class RenderItem extends PureComponent {
  render() {
    let { items } = this.props;
    const placeholderImage = require('../assets/img/img-placeholder.png');

    return (
      <TouchableOpacity style={styles.itemsStyle}>
        <View><Text>{items.title}</Text></View>
        <View style={styles.listImgBox}>
          <ImageLoad
            style={styles.listImg}
            loadingStyle={{ size: 'small', color: 'white' }}
            placeholderSource={placeholderImage}
            placeholderStyle={{ backgroundColor: '#dedfe1', width: Screen.width, height: Screen * 0.5 }}
            source={item.pictureUrl ? { uri: item.pictureUrl } : placeholderImage}
          />
        </View>
        <View style={styles.itemFooter}>
          <View>
            <Icon/>
            <Text>喜欢</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemsStyle: {
    flex: 1,
    width: Screen.width
  },

  listImg: {
    width: Screen.width,
    height: Screen.height * 0.5
  }
})
