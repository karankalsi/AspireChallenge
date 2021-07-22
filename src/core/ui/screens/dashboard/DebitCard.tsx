import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AmountView from '@core/molecules/AmountView';
import LoadingView from '@core/atoms/LoadingView';
import {RichCtaProps} from '@core/atoms/RichCta';
import FinancialCard from '@core/molecules/FinancialCard';
import DebitCardStyles from '@core/styles/dashboard/DebitCard';
import images from '@res/images';
import palette from '@res/palette';
import {User} from '@core/dto';
import actionCreator from '@core/actions/actionCreator';
import {StoreState} from '@core/store';
import RichCtaGroup, {RichCtaGroupProps} from '@core/molecules/RichCtaGroup';
import commonHelper from '@core/ui-lib/commonHelper';
import {ScreenTheme, withScreen} from '../withScreen';
import AppNavigation from '@core/ui-lib/navigation';
import { NavigationFunctionComponent } from 'react-native-navigation';

interface HomeProps {}

const CTA_ID_MAP = {
  TOP_UP: 'topup',
  WEEKLY_LIMIT: 'weekly_limit',
  FREEZE_CARD: 'freeze_card',
  NEW_CARD: 'new_card',
  DEACTIVATED_CARDS: 'deactivated_cards',
};

type RichCtaHookAction = [
  richCtaList: RichCtaProps[],
  onAction: RichCtaGroupProps['onAction'],
];

const useRichCtaList = (componentId: string, user?: User): RichCtaHookAction => {
  const dispatch = useDispatch();
  const temporaryWeeklyLimit = useSelector<
    StoreState,
    number | null | undefined
  >(state => state.dashboard.weeklyLimit.temporaryWeeklyLimit);
  const weeklyLimit =
    temporaryWeeklyLimit !== undefined
      ? temporaryWeeklyLimit
      : user?.weeklyLimit;
  const onAction = React.useCallback<Required<RichCtaGroupProps>['onAction']>(
    id => {
      switch (id) {
        case CTA_ID_MAP.WEEKLY_LIMIT:
          if (!!weeklyLimit) {
            dispatch(
              actionCreator.weeklyLimit().updateWeeklyLimit({
                weeklyLimitAmount: null,
              }),
            );
          } else {
            AppNavigation.showModal('UpdateWeeklyLimit');
          }
          break;
      }
    },
    [weeklyLimit],
  );

  const isCardFreezed = !!user?.debitCard?.freezed;
  const richCtaList: RichCtaProps[] = [
    {
      id: CTA_ID_MAP.TOP_UP,
      Icon: images.svg.Topup,
      title: 'Top-up account',
      description: 'Deposit money to your account to use with card',
    },
    {
      id: CTA_ID_MAP.WEEKLY_LIMIT,
      Icon: images.svg.WeeklyLimit,
      title: 'Weekly spending limit',
      description: !!weeklyLimit
        ? `Your weekly spending limit is ${commonHelper.formatAmount(
            weeklyLimit,
          )}`
        : 'You haven’t set any spending limit on card',
      asToggle: true,
      toggle: !!weeklyLimit,
    },
    {
      id: CTA_ID_MAP.FREEZE_CARD,
      Icon: images.svg.FreezeCard,
      title: 'Freeze card',
      description: `Your debit card is currently ${
        isCardFreezed ? 'freezed' : 'active'
      }`,
      asToggle: true,
      toggle: isCardFreezed,
    },
    {
      id: CTA_ID_MAP.NEW_CARD,
      Icon: images.svg.NewCard,
      title: 'Get a new card',
      description: 'This deacivates your current debit card',
    },
    {
      id: CTA_ID_MAP.DEACTIVATED_CARDS,
      Icon: images.svg.DeactivateCard,
      title: 'Deactivated cards',
      description: 'You haven’t set any spending limit on card',
    },
  ];

  return [richCtaList, onAction];
};

const DebitCard: NavigationFunctionComponent<HomeProps> = props => {
  const currentUser = useSelector<StoreState, User | undefined>(
    state => state.dashboard.base.currentUser,
  );
  const currentUserLoading = useSelector<StoreState, boolean>(
    state => state.dashboard.base.getCurrentUserLoading,
  );

  const [richCtaList, onAction] = useRichCtaList(props.componentId, currentUser);

  if (currentUserLoading) {
    return <LoadingView color={palette.backgroundLight} loading />;
  }

  return (
    <SafeAreaView style={DebitCardStyles.container}>
      <View style={DebitCardStyles.header}>
        <images.svg.Aspire
          fill={palette.primary}
          style={DebitCardStyles.headerLogo}
        />
        <Text style={DebitCardStyles.headerText}>Debit Card</Text>
        <Text style={DebitCardStyles.availableBalanceLabel}>
          Available Balance
        </Text>
        <AmountView
          style={DebitCardStyles.amountView}
          value={currentUser?.debitCard?.balance ?? ''}
        />
      </View>
      <View style={DebitCardStyles.overScrollLayout}></View>
      <ScrollView
        style={DebitCardStyles.scrollContainer}
        contentContainerStyle={DebitCardStyles.scrollContentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={DebitCardStyles.contentContainer}>
          <FinancialCard
            size={DebitCardStyles.debitCard.width}
            style={DebitCardStyles.debitCard}
            active={
              currentUser?.debitCard?.active && !currentUser?.debitCard?.freezed
            }
            cardHolderName={currentUser?.debitCard?.name ?? ''}
            cardHolderExpiry={currentUser?.debitCard?.expiry ?? ''}
            cardHolderNumber={currentUser?.debitCard?.number ?? ''}
            cardType={currentUser?.debitCard?.type}
          />
          <RichCtaGroup
            style={DebitCardStyles.richCtaGroup}
            data={richCtaList}
            onAction={onAction}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withScreen(DebitCard, {
  theme: ScreenTheme.DARK,
});
