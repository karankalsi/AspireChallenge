import {API_MOCK} from '@env';
import {
  ImageResource,
  LayoutBottomTabs,
  LayoutRoot,
  LayoutTabsChildren,
} from 'react-native-navigation';
import images from '@res/images';
import palette from '@res/palette';
import actionCreator from '@core/actions/actionCreator';
import store from '@core/store';
import Navigation from '@core/ui-lib/navigation';
import {AppScreen, registerScreens, setDefaultOptions} from './core/ui/screens';

interface BottomTabs {
  name: AppScreen;
  text: string;
  icon: ImageResource;
}

const DashboardBottomTabs: BottomTabs[] = [
  {
    name: 'Home',
    text: 'Home',
    icon: images.png.aspire,
  },
  {
    name: 'DebitCard',
    text: 'Debit Card',
    icon: images.png.card,
  },
  {
    name: 'Payments',
    text: 'Payments',
    icon: images.png.payments,
  },
  {
    name: 'Credit',
    text: 'Credit',
    icon: images.png.credit,
  },
  {
    name: 'Profile',
    text: 'Profile',
    icon: images.png.user,
  },
];
const startApp = async () => {
  registerScreens();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(onLaunch);
};

const onLaunch = async (): Promise<void> => {
  setupDevTools();
  store.dispatch(actionCreator.dashboard().getCurrentUser());
  setDashboardTabs(DashboardBottomTabs);
};

const setupDevTools = () => {
  if (__DEV__ && API_MOCK) {
    const {initMockServer} = require('./core/data/api/mock');
    initMockServer();
  }
};

const setDashboardTabs = (tabs: BottomTabs[]) => {
  const rootLayout: LayoutRoot = {
    root: {},
  };
  let bottomTabs: LayoutBottomTabs = {
    options: {bottomTabs: {currentTabIndex: 1}},
  };

  for (let tabIndex in tabs) {
    let {name, text, icon} = tabs[tabIndex];
    let tabsChildren: LayoutTabsChildren = {
      stack: {
        children: [
          {
            component: {
              id: `DashboardTab${tabIndex}`,
              name: name,
            },
          },
        ],
        options: {
          bottomTab: {
            text,
            icon,
            selectedIconColor: palette.primary,
            iconColor: palette.inactiveGrey,
            selectedTextColor: palette.primary,
            textColor: palette.inactiveGrey,
          },
        },
      },
    };
    bottomTabs.children = [...(bottomTabs.children ?? []), tabsChildren];
  }
  rootLayout.root.bottomTabs = bottomTabs;
  Navigation.setRoot(rootLayout);
};

export {startApp};
