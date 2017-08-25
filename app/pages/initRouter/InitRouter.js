import React, { PureComponent } from 'react';
import {
  View
} from 'react-native';

import Loading from '../../component/Loading';
import BaseStyle from '../../common/BaseStyle';

let navigate = null;

export default class InitRouter extends PureComponent {
  static navigationOptions = ((param) => {
    navigate = param.navigation.navigate;
    return {
      header: null
    }
  });

  componentDidMount() {
    let _this = this;
    storage.load({
      key : 'userId'
     }).then(val => {
       if(val) {
        navigate('List');
       }
     }).catch(err => {
       console.log(err)
       navigate('Login');
     });
  }

  render() {
    return (
      <View style={BaseStyle.container}>
        <Loading styles={{alignItems: 'center', justifyContent: 'center'}}/>
      </View>
    )
  }
}
