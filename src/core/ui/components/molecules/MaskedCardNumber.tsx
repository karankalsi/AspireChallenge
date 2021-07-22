import React from 'react';
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import DotsGroup from '@core/atoms/DotsGroup';
import MaskedCardNumberStyles from '@core/styles/components/molecules/MaskedCardNumber';

interface MaskedCardNumberProps {
  cardNumber: string;
  masked: boolean;
  color: ColorValue;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const MaskedCardNumber: React.FC<MaskedCardNumberProps> = props => {
  const {style, textStyle, cardNumber, masked, color} = props;
  const count = 4;
  const maskedNumber = cardNumber.substr(cardNumber.length - count);
  const MaskedGroup = () => (
    <DotsGroup
      style={MaskedCardNumberStyles.maskedGroup}
      color={color}
      count={count}
    />
  );

  return (
    <View style={[MaskedCardNumberStyles.maskedView, style]}>
      {masked ? (
        <>
          <MaskedGroup />
          <MaskedGroup />
          <MaskedGroup />
          <Text style={textStyle}>{maskedNumber}</Text>
        </>
      ) : (
        <Text style={textStyle}>{cardNumber}</Text>
      )}
    </View>
  );
};

export default MaskedCardNumber;
