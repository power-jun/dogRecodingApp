import React from 'react';

import List from '../pages/list/List';
import Editor from '../pages/editor/Editor';
import Account from '../pages/account/Account';

import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/FontAwesome';

const TabNavigatorRouters = {
  List: {
    screen: List,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => ( <IconA name="video-camera" size={22} color={tintColor} /> )
    }
  },

  Editor: {
    screen: Editor,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => ( <Icon name="ios-add-circle-outline" size={22} color={tintColor}/> )
    }
  },

  Account: {
    screen: Account,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => ( <IconA name="user" size={22} color={tintColor} />)
    }
  }
}

export default TabNavigatorRouters;
