
import React, { Component } from 'react';
import { Text } from 'react-native';
import DogRecoding from './DogRecoding';

const DEFAULT_ICON_SIZE = 30;
// let fontReference = 'xinfang';

class Icon extends Component {
  render() {
    let { name, size, color, style, ...props } = this.props;
    let glyph = DogRecoding(name);
    size = size || DEFAULT_ICON_SIZE;
    let styleDefaults: Object = {
      fontSize: size,
      fontWeight: 'normal',
      fontStyle: 'normal',
      color,
    };
    props.style = [styleDefaults, style];
    props.ref = (component) => this._root = component;
    // styleDefaults.fontFamily = fontReference;
    // console.log(this.props)
    return (<Text {...props}>{glyph}</Text>);
  }
};

export default Icon;
