import { Dimensions, Platform, PixelRatio } from 'react-native';

const DimensionsWindow = Dimensions.get('window');

export default {
  width: DimensionsWindow.width,
  height: Dimensions.height,
  onePixel: 1 / PixelRatio.get(),
  systemIos: Platform.OS
}
