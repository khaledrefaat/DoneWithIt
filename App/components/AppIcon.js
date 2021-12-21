import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const AppIcon = ({
  backgroundColor = colors.black,
  color = colors.white,
  size = 50,
  name,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor,
        height: size,
        width: size,
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
