import React from 'react';
import {ActivityIndicator, ColorValue, View} from 'react-native';
import palette from '@res/palette';
import LoadingViewStyles from '@core/styles/components/atoms/LoadingView';

export interface LoadingViewProps {
  color?: ColorValue;
  loading: boolean;
}

const LoadingView: React.FC<LoadingViewProps> = props => {
  const {color = palette.primary, loading} = props;
  return (
    <View style={LoadingViewStyles.container}>
      <ActivityIndicator
        size={LoadingViewStyles.indicator.width}
        color={color}
        animating={loading}
      />
    </View>
  );
};

export default LoadingView;
