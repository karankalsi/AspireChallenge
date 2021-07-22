import React from 'react';
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import palette from '@res/palette';
import AspireLogo from '@core/atoms/AspireLogo';
import CardTypeView from '@core/atoms/CartTypeView';
import EyeToggle from '@core/atoms/EyeToggle';
import MaskedCardNumber from './MaskedCardNumber';
import FinancialCardStyles from '@core/styles/components/molecules/FinancialCard';

const SIZE_RATIO = 0.6;

export interface FinancialCardProps {
  size: number;
  style: StyleProp<ViewStyle>;
  active?: boolean;
  activeColor?: ColorValue;
  defaultColor?: ColorValue;
  activeTextColor?: ColorValue;
  defaulTextColor?: ColorValue;
  cardType?: 'Visa' | 'MasterCard' | 'Amex' | 'Discover';
  cardHolderName: string;
  cardHolderNumber: string;
  cardHolderExpiry: string;
}

const FinancialCard: React.FC<FinancialCardProps> = props => {
  const {
    style,
    active,
    size,
    activeColor = palette.primary,
    defaultColor = palette.inactiveGrey,
    activeTextColor = palette.textColorLight,
    defaulTextColor = palette.textColorLight,
    cardType,
    cardHolderName,
    cardHolderNumber,
    cardHolderExpiry,
  } = props;
  const dynamicCardStyle: ViewStyle = {
    width: size,
    height: size * SIZE_RATIO,
    backgroundColor: active ? activeColor : defaultColor,
  };
  const textColor = active ? activeTextColor : defaulTextColor;
  const dynamicTextStyle: TextStyle = {
    color: textColor,
  };
  const [cardMasked, setCardMasked] = React.useState<boolean>(false);
  const onCardMaskToggle = React.useCallback(() => {
    setCardMasked(!cardMasked);
  }, [cardMasked]);
  return (
    <View style={[style, FinancialCardStyles.container]}>
      <TouchableOpacity
        style={FinancialCardStyles.showCardNumberButton}
        onPress={onCardMaskToggle}>
        <EyeToggle visible={!cardMasked} />
        <Text style={FinancialCardStyles.showCardNumberLabel}>
          {cardMasked ? 'Show card number' : 'Hide card number'}
        </Text>
      </TouchableOpacity>
      <View style={[FinancialCardStyles.card, dynamicCardStyle]}>
        <Text style={FinancialCardStyles.cardHolderName}>{cardHolderName}</Text>

        <MaskedCardNumber
          style={FinancialCardStyles.maskedCardNumberView}
          textStyle={[FinancialCardStyles.cardNumber, dynamicTextStyle]}
          cardNumber={cardHolderNumber}
          masked={cardMasked}
          color={defaulTextColor}
        />

        <View style={FinancialCardStyles.expiryCvvRow}>
          <Text style={[FinancialCardStyles.expiryCvvText, dynamicTextStyle]}>
            Expiry: {cardHolderExpiry}
          </Text>
          <View style={FinancialCardStyles.cvvRow}>
            <Text style={[FinancialCardStyles.expiryCvvText, dynamicTextStyle]}>
              CVV:{' '}
            </Text>
            <Text style={[FinancialCardStyles.expiryCvvStar, dynamicTextStyle]}>
              ***
            </Text>
          </View>
        </View>
        <View style={FinancialCardStyles.cardLogo}>
          <AspireLogo />
        </View>
        <View style={FinancialCardStyles.typeLogoContainer}>
          {cardType && (
            <CardTypeView
              style={FinancialCardStyles.cardTypeView}
              type={cardType}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default FinancialCard;
