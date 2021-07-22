import React from 'react';
import {
  StyleProp,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import palette from '@res/palette';
import CtaRowStyles from '@core/styles/components/molecules/CtaRow';

export type RichCtaID = string | number;

export interface RichCtaProps {
  style?: StyleProp<ViewStyle>;
  id: RichCtaID;
  Icon: React.FC<SvgProps>;
  title: string;
  description: string;
  asToggle?: boolean;
  toggle?: boolean;
  onAction?: (id: RichCtaID, toggle?: boolean) => void;
}

const RichCta: React.FC<RichCtaProps> = props => {
  const {id, style, Icon, title, description, asToggle, toggle, onAction} =
    props;
  const onPressHandler = React.useCallback(() => {
    onAction && onAction(id);
  }, [id, onAction]);
  const onSwitchHandler = React.useCallback(
    value => {
      onAction && onAction(id, value);
    },
    [id, onAction],
  );
  const switchRef = React.useRef<Switch>(null);
  return (
    <TouchableOpacity
      style={[CtaRowStyles.container, style]}
      onPress={onPressHandler}
      disabled={asToggle}>
      <Icon style={CtaRowStyles.icon} />
      <View style={CtaRowStyles.infoContainer}>
        <Text style={CtaRowStyles.title}>{title}</Text>
        <Text style={CtaRowStyles.description}>{description}</Text>
      </View>
      {asToggle && (
        <Switch
          ref={switchRef}
          style={CtaRowStyles.switch}
          trackColor={{false: palette.infoGrey, true: palette.primary}}
          thumbColor={palette.backgroundLight}
          onValueChange={onSwitchHandler}
          value={toggle}
        />
      )}
    </TouchableOpacity>
  );
};

export default RichCta;
