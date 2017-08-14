import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

import BaseStyle from '../../common/BaseStyle';
import Loading from '../../component/Loading';
import Icon from 'react-native-vector-icons/FontAwesome';

import RenderItem from '../../component/RenderItem';

export default class List extends PureComponent {
  static navigationOptions = {
    title: '狗狗说',
  }

  state = {
    loading: true,
    dataSource: [{
      title: '测测老卢会说话',
      pictureUrl: '../assets/img/dog1.jpeg'
    },
    {
      title: '哈巴狗',
      pictureUrl: '../assets/img/dog2.jpeg'
    }]
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  _renderItem(data) {
    return <RenderItem items={data.item} navigation={this.props.navigation}/>
  }

  render() {
    return (
     this.state.loading ?
     <Loading/>
     :
     <View style={BaseStyle.container}>
      <FlatList
        renderItem={this._renderItem.bind(this)}
        data={this.state.dataSource}
        keyExtractor={(item, index) => {
              return index;
        }}
      />
     </View>
    )
  }
}
