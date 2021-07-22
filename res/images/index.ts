import DotSvg from './vector/dot.svg';
import EyeHide from './vector/eye_hide.svg';
import EyeShow from './vector/eye_show.svg';
import Topup from './vector/topup.svg';
import WeeklyLimit from './vector/weeklylimit.svg';
import FreezeCard from './vector/freeze_card.svg';
import NewCard from './vector/newcard.svg';
import DeactivateCard from './vector/deactivatecard.svg';
import Aspire from './vector/aspire.svg';
import Visa from './vector/visa.svg';
import Discover from './vector/discover.svg';
import Amex from './vector/amex.svg';

const svg = {
  Dot: DotSvg,
  EyeHide: EyeHide,
  EyeShow: EyeShow,
  Topup: Topup,
  WeeklyLimit: WeeklyLimit,
  FreezeCard: FreezeCard,
  NewCard: NewCard,
  DeactivateCard: DeactivateCard,
  Aspire: Aspire,
  Visa: Visa,
  Discover: Discover,
  Amex: Amex,
};

const png = {
  aspire: require('./raster/aspire.png'),
  card: require('./raster/card.png'),
  payments: require('./raster/payments.png'),
  credit: require('./raster/credit.png'),
  user: require('./raster/user.png'),
};

export default {
  svg,
  png,
};
