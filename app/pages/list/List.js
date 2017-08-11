import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import BaseStyle from '../../common/BaseStyle';
import Icon from '../../component/Icon';
import Loading from '../../component/Loading';

export default class List extends PureComponent {
  static navigationOptions = {
    title: '狗狗说',
  }

  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
     this.state.loading ?
     <Loading/>
     :
     <View style={BaseStyle.container}>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Editor') }>
        <Text>列表页</Text>
        <Icon name="magnifier" size={18} color="#7e7e7e"/>
       </TouchableOpacity>
     </View>
    )
  }
}
