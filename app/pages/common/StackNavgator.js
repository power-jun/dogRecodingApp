import React, {
  PureComponent
} from 'react';

import {
  StackNavigator,
  TabNavigator
} from "react-navigation";

import List from '../list/List';
import Editor from '../editor/Editor';
import Account from '../account/Account';

import TabNavigatorRouter from './TabNavgatorRouter';

let TabNavigators = null;
let MyNavigator = null;

const TabNavigatorConfig = {
  initialRouteName: 'List',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#ff8500', // 文字选中的颜色
    inactiveTintColor: '#999', // 文件未选中的颜色
    showIcon: true, // 显示Icon
    labelStyle: {
      fontSize: 14,
      paddingBottom: 5
    },
    style: {
      backgroundColor: '#fff',
    },
  }
}

const stackNavigatorConfig = {
  initialRouteName: 'List',
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#333',
    showIcon: true,
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 999,
      zIndex: 999
    }
  }
}

export default class MinStackNavigator extends PureComponent {

  componentWillMount() {
    TabNavigators = TabNavigator(TabNavigatorRouter, TabNavigatorConfig);

    const StackNavgatorRouter = {
      List: { screen: TabNavigators },
      Editor: { screen: Editor },
      Account: { screen: Account }
    }

    MyNavigator = StackNavigator(StackNavgatorRouter, stackNavigatorConfig);
  }

  render() {
    return (
      <MyNavigator/>
    )
  }
}
