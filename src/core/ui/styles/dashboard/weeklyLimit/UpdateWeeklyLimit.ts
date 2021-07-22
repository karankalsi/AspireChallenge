import palette from '@res/palette';
import typeface from '@res/typeface';
import {StyleSheet} from 'react-native';

const UpdateWeeklyLimitStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 150,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  headerLogo: {
    alignSelf: 'flex-end',
  },
  headerText: {
    ...typeface.h3,
    color: palette.textColorLight,
  },
});

export default UpdateWeeklyLimitStyles;
