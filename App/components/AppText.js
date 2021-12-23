import React from 'react';
import { Text, Platform } from 'react-native';

import defaultStyles from '../config/defaultStyles';

const AppText = ({
  children,
  weight = defaultStyles.text.fontWeight,
  color = defaultStyles.text.color,
  size = defaultStyles.text.fontSize,
  style,
}) => {
  return (
    <Text
      style={[
        {
          color: color,
          fontSize: size,
          fontWeight: weight,
          fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;
