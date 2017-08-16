import React, {
  PureComponent
} from 'react';

import {
  View,
  Text
} from 'react-native';

import Storage from './common/Storage';
import MyNavigator from './common/StackNavgator';

export default class Root extends PureComponent {
  render() {
    return ( <MyNavigator/> )
  }
}
