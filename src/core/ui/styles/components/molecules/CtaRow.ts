import {StyleSheet} from 'react-native';
import palette from '@res/palette';
import typeface from '@res/typeface';

const CtaRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {},
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },
  title: {
    ...typeface.meta,
  },
  description: {
    marginTop: 2,
    ...typeface.info,
  },
  switch: {marginLeft: 8},
});

export default CtaRowStyles;
