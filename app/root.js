import React, {
  PureComponent
} from 'react';

import {
  View,
  Text
} from 'react-native';

import HTTPAdapter from './common/HTTPAdapter';

import Storage from './common/Storage';
import MyNavigator from './common/StackNavgator';

export default class Root extends PureComponent {

  componentWillMount() {
    HTTPAdapter.setup();
  }

  render() {
    return ( <MyNavigator/> )
  }
}
