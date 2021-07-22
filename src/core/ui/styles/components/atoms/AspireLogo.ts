import {StyleSheet} from 'react-native';
import typeface from '@res/typeface';

const AspireLogoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    ...typeface.title,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default AspireLogoStyles;
