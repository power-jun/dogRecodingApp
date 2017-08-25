import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  InteractionManager,
  StyleSheet
} from 'react-native';

import axios from 'axios';

import BaseStyle from '../../common/BaseStyle';
import Screen from '../../utils/Screen';

const width = Screen.width;

export default class Login extends PureComponent {
  static navigationOptions = {
    title: '登录页',
    headerLeft: <Text></Text>
  }

  phone = ''

  sendCode() {
    console.log('发送验证码');
  }

  login() {
    // InteractionManager.runAfterInteractions(() => {
    //   this.props.navigation.navigate('List');
    // });

    axios.post('/signup', { params: { phone: 1857456985 }}).then(function(data) {
      debugger
    });
  }

  render() {
    return(
      <View style={[BaseStyle.container, { padding: 20 }]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput style={[styles.inputContent, { flex: 6.5 }]} placeholder="请输入手机号" onChangeText={(value) => this.phone = value} maxLength={11}/>
          <TouchableOpacity style={[styles.sendBtn, {flex: 3.5}]} onPress={ this.sendCode.bind(this) }>
            <Text style={[BaseStyle.colorFff, BaseStyle.fz18]}>发送验证码</Text>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="输入验证码" style={[ styles.inputContent]}/>
        <TouchableOpacity style={styles.sendBtn} onPress={ this.login.bind(this) }>
            <Text style={[BaseStyle.colorFff, BaseStyle.fz18]}>快速登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContent: {
    height: 30,
    paddingLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'flex-start'
  },

  sendBtn: {
    height: 30,
    marginTop: 10,
    backgroundColor: '#f39800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
})
