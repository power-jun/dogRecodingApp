import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import BaseStyle from '../../common/BaseStyle';

export default class Editor extends PureComponent {
  static navigationOptions = {
    title: '编辑页'
  }

  render() {
    return(
      <View style={BaseStyle.container}>
        <Text>编辑页</Text>
        <Image source={require('../../assets/img/gonggao.png')}/>
      </View>
    )
  }
}
