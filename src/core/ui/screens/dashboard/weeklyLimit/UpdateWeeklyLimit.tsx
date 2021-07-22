import UpdateWeeklyLimitStyles from '@core/styles/dashboard/weeklyLimit/UpdateWeeklyLimit';
import images from '@res/images';
import palette from '@res/palette';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ScreenTheme, withScreen} from '../../withScreen';

const UpdateWeeklyLimit: React.FC = () => {
  return (
    <SafeAreaView style={UpdateWeeklyLimitStyles.container}>
      <View style={UpdateWeeklyLimitStyles.header}>
        <images.svg.Aspire
          fill={palette.primary}
          style={UpdateWeeklyLimitStyles.headerLogo}
        />
        <Text style={UpdateWeeklyLimitStyles.headerText}>Spending Limit</Text>
      </View>
    </SafeAreaView>
  );
};

export default withScreen(UpdateWeeklyLimit, {
  theme: ScreenTheme.DARK,
});
