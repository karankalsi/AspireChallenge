import React from 'react';
import {ColorValue, StyleProp, View, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import images from '@res/images';
import palette from '@res/palette';
import DotsGroupStyles from '@core/styles/components/atoms/DotsGroup';

export interface DotGroupProps {
  style?: StyleProp<ViewStyle>;
  count: number;
  color: ColorValue;
  spacing?: number;
}

const DotsGroup: React.FC<DotGroupProps> = props => {
  const {style, count, color, spacing = 6} = props;
  const fillColor: string =
    typeof color === 'string' ? color : palette.textColorLight;
  const dots = new Array(count)
    .fill({
      style: {marginRight: spacing, backgroundColor: 'pink'},
      fill: fillColor,
    } as SvgProps)
    .map((props, index) => <images.svg.Dot {...props} key={`Dot${index}`} />);

  return <View style={[DotsGroupStyles.container, style]}>{dots}</View>;
};

export default DotsGroup;
