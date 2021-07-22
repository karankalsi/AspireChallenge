import {StyleSheet} from 'react-native';
import palette from '@res/palette';
import typeface from '@res/typeface';

const DebitCardStyles = StyleSheet.create({
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
  availableBalanceLabel: {
    marginTop: 24,
    ...typeface.meta,
    color: palette.textColorLight,
  },
  amountView: {
    marginTop: 10,
  },
  overScrollLayout: {
    width: '100%',
    height: 300,
    backgroundColor: palette.backgroundLight,
    alignSelf: 'baseline',
  },
  scrollContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 260,
  },
  scrollContentContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingBottom: 280,
    backgroundColor: palette.backgroundLight,
  },
  contentContainer: {
    top: -80,
  },
  debitCard: {
    width: 350,
    alignSelf: 'center',
    borderRadius: 10,
  },
  richCtaGroup: {
    marginTop: 34,
  },
});

export default DebitCardStyles;
