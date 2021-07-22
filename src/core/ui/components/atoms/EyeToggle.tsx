import React from 'react';
import images from '@res/images';

interface EyeToggleProps {
  visible: boolean;
}

const EyeToggle: React.FC<EyeToggleProps> = props => {
  const {visible} = props;
  return visible ? <images.svg.EyeHide /> : <images.svg.EyeShow />;
};

export default EyeToggle;
