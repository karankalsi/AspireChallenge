import React from 'react';
import CurrencyLabelStyles from '@core/styles/components/atoms/CurrencyLabel';
import {StyleProp, Text, TextStyle} from 'react-native';

export interface CurrencyLabelProps {
  style?: StyleProp<TextStyle>;
}

const CurrencyLabel: React.FC<CurrencyLabelProps> = props => {
  const {style} = props;
  return <Text style={[CurrencyLabelStyles.label, style]}>S$</Text>;
};

export default CurrencyLabel;
