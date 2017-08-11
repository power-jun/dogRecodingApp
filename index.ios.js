/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry } from 'react-native';

import Root from './app/root';

export default class DogRecodingApp extends PureComponent {
  render() {
    return (
      <Root/>
    );
  }
}


AppRegistry.registerComponent('dogRecodingApp', () => DogRecodingApp);
