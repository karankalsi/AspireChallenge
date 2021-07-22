import {StyleSheet} from 'react-native';
import palette from '@res/palette';
import typeface from '@res/typeface';

const AmountViewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    ...typeface.h3,
    color: palette.textColorLight,
    marginLeft: 10,
  },
});

export default AmountViewStyles;
