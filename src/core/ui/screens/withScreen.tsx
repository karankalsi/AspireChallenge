import React from 'react';
import {
  Navigation,
  NavigationComponentProps,
  NavigationFunctionComponent,
  Options,
} from 'react-native-navigation';
import palette from '@res/palette';
import {StatusBar} from 'react-native';

export type ScreenComponent<P> = React.ComponentType<P>;

export type ScreenProps = NavigationComponentProps;

export enum ScreenTheme {
  DARK,
  LIGHT,
}

export interface ScreenOptions {
  theme?: ScreenTheme;
  autoRotate?: boolean;
  landscape?: boolean;
}

const generateScreenStyle = (options?: ScreenOptions): Options => {
  const themeColor =
    options?.theme === ScreenTheme.DARK
      ? palette.primaryDark
      : palette.backgroundLight;

  return {
    window: {
      backgroundColor: themeColor,
    },
    layout: {
      componentBackgroundColor: themeColor,
      orientation: options?.autoRotate
        ? ['portrait', 'landscape']
        : [options?.landscape ? 'landscape' : 'portrait'],
    },
    statusBar: {
      backgroundColor: palette.transparent,
    },
  };
};

const useScreenStyle = (componentId: string, options?: ScreenOptions): void => {
  React.useEffect(() => {
    Navigation.mergeOptions(componentId, generateScreenStyle(options));
  }, [componentId, options]);
};

export const withScreen = <P extends ScreenProps>(
  WrappedComponent: ScreenComponent<P>,
  options?: ScreenOptions,
): NavigationFunctionComponent<P> => {
  const ScreenHOC: NavigationFunctionComponent<P> = props => {
    useScreenStyle(props.componentId, options);
    const isDarkTheme = options?.theme === ScreenTheme.DARK;
    return (
      <>
        <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
        <WrappedComponent {...props} />
      </>
    );
  };
  ScreenHOC;
  return ScreenHOC;
};

export const withPureScreen = <P extends ScreenProps>(
  WrappedComponent: ScreenComponent<P>,
  options?: ScreenOptions,
): NavigationFunctionComponent<P> => {
  return React.memo(withScreen(WrappedComponent, options));
};
