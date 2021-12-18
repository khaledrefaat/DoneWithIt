import React from 'react';
import { Text } from 'react-native';

const AppText = ({
  children,
  weight = '400',
  color = 'black',
  size = 18,
  style,
}) => {
  return (
    <Text style={[{ color: color, fontSize: size, fontWeight: weight }, style]}>
      {children}
    </Text>
  );
};

export default AppText;
