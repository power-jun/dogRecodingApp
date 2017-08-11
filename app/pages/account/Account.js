import React, { PureComponent } from 'react';
import {
  View,
  Text
 } from 'react-native';

 import BaseStyle from '../common/BaseStyle';

 export default class Account extends PureComponent {
  static navigationOptions = {
    title: '编辑页'
  }

   render() {
     return(
        <View style={BaseStyle.container}>
          <Text>账号页</Text>
        </View>
     )
   }
 }
