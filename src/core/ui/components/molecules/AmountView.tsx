import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import AmountViewStyles from '@core/styles/components/molecules/AmountView';
import CurrencyLabel from '../atoms/CurrencyLabel';

interface AmountViewProps {
  style?: StyleProp<ViewStyle>;
  currencyTextStyle?: StyleProp<TextStyle>;
  amountTextStyle?: StyleProp<TextStyle>;
  value: number | string;
}

const AmountView: React.FC<AmountViewProps> = props => {
  const {style, value} = props;
  return (
    <View style={[AmountViewStyles.container, style]}>
      <CurrencyLabel />
      <Text style={AmountViewStyles.value}>{value}</Text>
    </View>
  );
};

export default AmountView;
