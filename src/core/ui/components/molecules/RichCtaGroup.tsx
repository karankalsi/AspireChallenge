import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import RichCta, {RichCtaProps} from '../atoms/RichCta';
import RichCtaGroupStyles from '@core/styles/components/molecules/RichCtaGroup';

export interface RichCtaGroupProps {
  style?: StyleProp<ViewStyle>;
  data: RichCtaProps[];
  onAction?: RichCtaProps['onAction'];
}

const RichCtaGroup: React.FC<RichCtaGroupProps> = props => {
  const {style, data, onAction} = props;
  const renderRichCta: (item: RichCtaProps) => React.ReactElement = props => (
    <RichCta
      style={RichCtaGroupStyles.richCta}
      key={props.title}
      onAction={onAction}
      {...props}
    />
  );

  return <View style={style}>{data.map(renderRichCta)}</View>;
};

export default RichCtaGroup;
