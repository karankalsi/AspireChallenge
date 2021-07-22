import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewProps} from 'react-native';
import images from '@res/images';
import palette from '@res/palette';
import AspireLogoStyles from '@core/styles/components/atoms/AspireLogo';

export interface AspireLogoProps {
  style?: StyleProp<ViewProps>;
  color?: 'string';
  logoTextStyle?: StyleProp<TextStyle>;
}

const AspireLogo: React.FC<AspireLogoProps> = props => {
  const {style, color = palette.textColorLight, logoTextStyle} = props;
  const dynamicLogoTextStyle: TextStyle = {color};
  return (
    <View style={[AspireLogoStyles.container, style]}>
      <images.svg.Aspire fill={color} />
      <Text
        style={[
          AspireLogoStyles.logoText,
          logoTextStyle,
          dynamicLogoTextStyle,
        ]}>
        aspire
      </Text>
    </View>
  );
};

export default AspireLogo;
