import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import images from '@res/images';
import palette from '@res/palette';
import {CardType} from '@core/dto';

export interface CardTypeViewProps {
  type: CardType;
  color?: 'string';
  style?: StyleProp<ViewStyle>;
}

const CardTypeView: React.FC<CardTypeViewProps> = props => {
  const {style, type, color = palette.textColorLight} = props;
  const {width, height} = StyleSheet.flatten(style);
  const svgProps: SvgProps = {
    style,
    fill: color,
  };
  if (width) svgProps.width = width;
  if (height) svgProps.height = height;
  switch (type) {
    case 'Visa':
      return <images.svg.Visa {...svgProps} />;
    case 'Discover':
      return <images.svg.Discover {...svgProps} />;
    case 'Amex':
      return <images.svg.Amex {...svgProps} />;
    default:
      return null;
  }
};

export default CardTypeView;
