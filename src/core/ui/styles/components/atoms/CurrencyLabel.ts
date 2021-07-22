import palette from '@res/palette';
import typeface from '@res/typeface';
import {StyleSheet} from 'react-native';

const CurrencyLabelStyles = StyleSheet.create({
  label: {
    ...typeface.infoBold,
    color: palette.textColorLight,
    backgroundColor: palette.primary,
    paddingHorizontal: 12,
    lineHeight: 18,
    paddingVertical: 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default CurrencyLabelStyles;
