import React, {
  PureComponent
} from 'react';

import {
  View,
  Text
} from 'react-native';

import MyNavigator from './pages/common/StackNavgator';

export default class Root extends PureComponent {
  render() {
    return ( <MyNavigator/> )
  }
}
