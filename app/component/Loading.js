import React, { PureComponent } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import BaseStyle from '../common/BaseStyle';

export default class Loading extends PureComponent {

  render() {
    return (
      <View style={ BaseStyle.container }>
        {/* <Image source={ require('../assets/img/oval.svg')} style = {{width: 80, height: 80}}/> // 暂不支持SVG */}
        <ActivityIndicator />
      </View>
    )
  }

}
