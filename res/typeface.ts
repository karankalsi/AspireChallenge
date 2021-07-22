import {TextStyle} from 'react-native';
import palette from './palette';

type AppFonts =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'title'
  | 'meta'
  | 'metaBold'
  | 'action'
  | 'paragraph'
  | 'info'
  | 'infoBold';

const typeface: Record<AppFonts, TextStyle> = {
  h1: {
    fontSize: 32,
    color: palette.textColorDark,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    color: palette.textColorDark,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    color: palette.textColorDark,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 22,
    color: palette.textColorDark,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: palette.textColorDark,
  },
  meta: {
    fontSize: 14,
    color: palette.textColorDark,
  },
  metaBold: {
    fontSize: 14,
    color: palette.textColorDark,
    fontWeight: '600',
  },
  action: {
    fontSize: 12,
    color: palette.textColorDark,
    fontWeight: '600',
  },
  paragraph: {
    fontSize: 16,
    color: palette.textColorDark,
    textAlign: 'justify',
    lineHeight: 24,
  },
  info: {
    fontSize: 12,
    color: palette.infoGrey,
  },
  infoBold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
};

export default typeface;
