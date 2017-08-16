import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  InteractionManager
} from 'react-native';

import BaseStyle from '../common/BaseStyle';
import ImageLoad from 'react-native-image-placeholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconP from 'react-native-vector-icons/Foundation';
import IconH from 'react-native-vector-icons/Ionicons';

import Screen from '../utils/Screen';

const width = Screen.width;

export default class RenderItem extends PureComponent {

  state = {
    likeFlag: false
  }

  like() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        likeFlag: !this.state.likeFlag
      });
    })
  }

  comment() {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.navigate('Detail');
    })
  }

  render() {
    let { items } = this.props;
    const placeholderImage = require('../assets/img/dog1.jpeg');

    return (
      <View>
        <TouchableOpacity style={styles.itemsStyle} onPress={() => this.comment()}>
          <View style={styles.itemTitle}><Text style={[BaseStyle.fz18, BaseStyle.color333]}>{items.title}</Text></View>
          <View style={styles.listImgBox}>
            <ImageLoad
              style={styles.listImg}
              loadingStyle={{ size: 'small', color: 'white' }}
              placeholderSource={placeholderImage}
              placeholderStyle={{ backgroundColor: '#dedfe1', width: width, height: width * 0.5 }}
              source={items.pictureUrl ? { uri: items.pictureUrl } : placeholderImage}
            />
            <View style={BaseStyle.palyIcon}>
              <IconP name="play" size={22} color="#ee735c" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.itemFooter}>
          <TouchableOpacity onPress={() => this.like()} style={{ flexDirection: 'row', justifyContent: 'center', paddingRight: '20%', borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: '#ccc' }}>
            <IconH name={this.state.likeFlag ? "ios-heart" : "ios-heart-outline"} size={18} style={{ marginRight: 5 }} color={this.state.likeFlag ? '#f60' : '#ccc'} />
            <Text>喜欢</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.comment()} style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: '20%' }}>
            <Icon name="comment-o" size={18} color="#ccc" style={{ marginRight: 5 }} />
            <Text>评论</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemsStyle: {
    flex: 1,
    width: width
  },

  listImg: {
    width: width,
    height: width * 0.5
  },

  itemTitle: {
    padding: 10
  },

  itemFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc'
  }
})
