import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import palette from '@res/palette';
import typeface from '@res/typeface';
import Home from './dashboard/Home';
import DebitCard from './dashboard/DebitCard';
import Payments from './dashboard/Payments';
import Credit from './dashboard/Credit';
import Profile from './dashboard/Profile';
import React from 'react';
import {Provider} from 'react-redux';
import store from '../../domain/redux/store';
import UpdateWeeklyLimit from './dashboard/weeklyLimit/UpdateWeeklyLimit';
const screens = {
  Home,
  DebitCard,
  Payments,
  Credit,
  Profile,
  UpdateWeeklyLimit,
};

export type AppScreen = keyof typeof screens;

function WrappedComponent<T extends NavigationComponentProps>(
  Screen: NavigationFunctionComponent,
) {
  return function inject(props: T) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Screen {...props} />
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export const registerScreens = (): void => {
  Object.keys(screens).forEach(key =>
    Navigation.registerComponent(key, () =>
      WrappedComponent(screens[key as AppScreen]),
    ),
  );
};

export const screenName = (screen: AppScreen): string => {
  return screen as string;
};

export const setDefaultOptions = (): void =>
  Navigation.setDefaultOptions({
    window: {
      backgroundColor: palette.backgroundLight,
    },
    statusBar: {
      backgroundColor: palette.backgroundLight,
      style: 'dark',
    },
    topBar: {
      visible: false,
      background: {
        color: palette.backgroundLight,
      },
      backButton: {
        color: palette.infoGrey,
        showTitle: false,
      },
      title: {
        ...(typeface.title as {}),
      },
    },
    layout: {
      componentBackgroundColor: palette.backgroundLight,
      orientation: ['portrait'],
      direction: 'locale',
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
  });

export default screens;
