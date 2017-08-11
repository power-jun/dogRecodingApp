import React from 'react';

import List from '../list/List';
import Editor from '../editor/Editor';
import Account from '../account/Account';

import Icon from '../component/Icon';

const TabNavigatorRouters = {
  List: {
    screen: List,
    navigationOptions: {
      tabBarLabel: '列表页',
      tabBarIcon: ({ tintColor }) => ( <Icon name="magnifier" size={16} color={tintColor} /> )
    }
  },

  Editor: {
    screen: Editor,
    navigationOptions: {
      tabBarLabel: '编辑页',
      tabBarIcon: ({ tintColor }) => ( <Icon name="magnifier" size={16} color={tintColor} /> )
    }
  },

  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: '账户页',
      tabBarIcon: ({ tintColor }) => ( <Icon name="magnifier" size={16} color={tintColor} />)
    }
  }
}

export default TabNavigatorRouters;
