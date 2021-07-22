import {StyleSheet} from 'react-native';
import palette from '@res/palette';
import typeface from '@res/typeface';

const FinancialCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  card: {
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  showCardNumberButton: {
    width: 150,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: palette.backgroundLight,
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 20,
    marginBottom: -12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  showCardNumberLabel: {
    ...typeface.action,
    color: palette.primary,
    marginLeft: 6,
  },
  cardLogo: {
    position: 'absolute',
    top: 1,
    right: 1,
    alignSelf: 'flex-end',
    margin: 24,
  },
  typeLogoContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 1,
    right: 1,
    alignSelf: 'flex-end',
    marginRight: 24,
    marginBottom: -5,
  },
  cardTypeView: {
    width: 70,
    height: 70,
  },
  cardHolderName: {
    ...typeface.h4,
    color: palette.textColorLight,
  },
  maskedCardNumberView: {
    marginTop: 24,
  },
  cardNumber: {
    flexDirection: 'row',
    ...typeface.metaBold,
    color: palette.textColorLight,
    letterSpacing: 5,
  },
  expiryCvvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 120,
    marginTop: 20,
  },

  cvvRow: {
    flexDirection: 'row',
  },
  expiryCvvText: {
    ...typeface.metaBold,
    color: palette.textColorLight,
  },
  expiryCvvStar: {
    ...typeface.h4,
    color: palette.textColorLight,
    includeFontPadding: false,
    letterSpacing: 3,
    marginTop: -2,
  },
});

export default FinancialCardStyles;
