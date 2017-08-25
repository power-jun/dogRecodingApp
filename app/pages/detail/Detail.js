import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Video from 'react-native-video';

import Loading from '../../component/Loading';
import BaseStyle from '../../common/BaseStyle';
import Screen from '../../utils/Screen';

import IconP from 'react-native-vector-icons/Foundation';

const width = Screen.width;

export default class Detail extends PureComponent {
  static navigationOptions = {
    title: '视频详情页'
  }

  comment = ''

  state = {
    videoLoading: true,
    barWidth: 1,
    dataSource: [{
      name: '测试111',
      comment: '狗狗很乖很可爱狗狗很乖很可爱狗狗很乖很可爱狗狗很乖很可爱',
      photoUrl: '../../assets/img/head.png'
    }]
  }

  setDuration() {
    debugger
    this.setState({
      videoLoading: false
    });
  }

  loadStart() {
    console.log('start');
  }

  videoError(e) {
    console.log('error', e);
  }

  progress(data) {
    let currentTime = data.currentTime;
    let totalTime = data.totalTime;

    this.setState({
      barWidth: Number((currentTime / totalTime).toFixed(2))
    });
  }

  _renderItem(data) {
    let item = data.item;

    return(
      <View style={styles.videoPerson}>
      <View style={{flex: 2,marginLeft: 10, width: 62, height: 62, borderRadius: 30, marginLeft: 15, overflow: 'hidden' }}>
        <Image source = {require('../../assets/img/head.png')} style={{width: 62, height: 62}}/>
      </View>
        <View style={{flex: 8, marginRight: 10}}>
          <Text style={[BaseStyle.color333, BaseStyle.fz18,{marginBottom: 5}]}>{ item.name || ''}</Text>
          <Text style={[BaseStyle.color666, BaseStyle.fz14, { lineHeight: 18 } ]}>{ item.comment || ''}</Text>
        </View>
      </View>
    )
  }

  commentSubmit() {
    console.log(this.comment);
  }

  render() {
    return (
      <ScrollView style={BaseStyle.container}>
        <View style={styles.videoBox}>
          <Video source={require('../../assets/video/broadchurch.mp4')} // 视频的URL地址，或者本地地址，都可以.
            rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
            volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
            muted={false}                // true代表静音，默认为false.
            paused={false}               // true代表暂停，默认为false
            resizeMode="cover"           // 视频的自适应伸缩铺放行为，
            repeat={true}                // 是否重复播放
            playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
            playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
            onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
            onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
            onProgress={this.progress}    //  进度控制，每250ms调用一次，以获取视频播放的进度
            onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
            onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
            style={styles.backgroundVideo} />
            {
              this.state.videoLoading ?
              <Loading styles= {{ alignItems: 'center', justifyContent: 'center'}}/> : null
            }

            {
              this.state.play ?
              <TouchableHighlight>
                <View style={BaseStyle.palyIcon}>
                  <IconP name="play" size={22} color="#ee735c"/>
                </View>
              </TouchableHighlight>
              : null
            }

            <View style={styles.precision}>
              <View style={[styles.precisionBar, { width: this.state.barWidth + '%' }]}></View>
            </View>
        </View>
        <View style={styles.videoPerson}>
          <View style={{flex: 2,marginLeft: 10, width: 62, height: 62, borderRadius: 30, marginLeft: 15, overflow: 'hidden' }}>
            <Image source = {require('../../assets/img/head.png')} style={{width: 62, height: 62}}/>
          </View>
          <View style={{flex: 8, marginRight: 10}}>
            <Text style={[BaseStyle.color333, BaseStyle.fz18,{marginBottom: 5}]}>狗狗视频拍摄作者</Text>
            <Text style={[BaseStyle.color666, BaseStyle.fz14, { lineHeight: 18 } ]}>狗狗视频拍摄作者人物介绍狗狗视频拍摄作者人物介绍狗狗视频拍摄作者人物介绍狗狗视频拍摄作者人物介绍狗狗视频拍摄作者人物介绍狗狗视频拍摄作者人物介绍</Text>
          </View>
        </View>
        <View style={styles.commentBox}>
            <View>
              <Text style={[BaseStyle.color333, BaseStyle.fz18]}>敢不敢评论一个</Text>
            </View>
            <View>
              <TextInput style={styles.inputContent} placeholder="好喜欢这只狗狗" onChangeText={(value) => this.comment = value} maxLength={100} multiline={true}/>
            </View>
            <TouchableOpacity style={styles.commentSubmit} onPress={ this.commentSubmit.bind(this) }>
              <Text style={[BaseStyle.colorFff, BaseStyle.fz18]}>提交</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            renderItem={this._renderItem.bind(this)}
            data={this.state.dataSource}
            keyExtractor={(item, index) => {
                  return index;
            }}
          />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  videoBox: {
    width: width,
    height: 260,
    backgroundColor: '#333',
    marginBottom: 10
  },

  precision: {
    width: width,
    height: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ccc'
  },

  precisionBar: {
    height: 5,
    borderRadius: 5,
    backgroundColor: '#f60'
  },

  videoPerson: {
    paddingTop: 10,
    flexDirection: 'row'
  },

  commentBox: {
    padding: 10,
    marginTop: 20
  },

  inputContent: {
    width: width - 20,
    height: 60,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    alignItems: 'flex-start'
  },

  commentSubmit: {
    width: 60,
    height: 30,
    marginTop: 10,
    backgroundColor: '#f39800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
})
