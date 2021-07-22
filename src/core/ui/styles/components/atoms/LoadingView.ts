import {StyleSheet} from 'react-native';

const LoadingViewStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 25,
  },
});
export default LoadingViewStyles;
