import React, {
  PureComponent
} from 'react';

import {
  StackNavigator,
  TabNavigator
} from "react-navigation";

import List from '../pages/list/List';
import Editor from '../pages/editor/Editor';
import Account from '../pages/account/Account';
import Detail from '../pages/detail/Detail';
import Login from '../pages/login/Login';
import InitialRouteName from '../pages/initRouter/InitRouter';

import TabNavigatorRouter from './TabNavgatorRouter';

let TabNavigators = null;
let MyNavigator = null;
let initialRouteName = '';

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
  initialRouteName: 'InitialRouteName',
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: '#333',
    showIcon: true,
    headerStyle: {
      backgroundColor: '#ee735c',
      elevation: 999,
      zIndex: 999
    },

    headerTitleStyle: {
      color: '#fff',
    }
  }
}

export default class MinStackNavigator extends PureComponent {

  componentWillMount() {
    TabNavigators = TabNavigator(TabNavigatorRouter, TabNavigatorConfig);

    const StackNavgatorRouter = {
      List: {
        screen: TabNavigators
      },
      Editor: {
        screen: Editor
      },
      Account: {
        screen: Account
      },
      Detail: {
        screen: Detail
      },
      Login: {
        screen: Login
      },

      InitialRouteName: {
        screen: InitialRouteName
      }
    }

    MyNavigator = StackNavigator(StackNavgatorRouter, stackNavigatorConfig);
  }

  render() {
    return ( <MyNavigator/>)
  }
}
