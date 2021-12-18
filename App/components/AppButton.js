import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const AppButton = ({
  textStyle,
  title,
  style,
  onPress,
  backgroundColor = colors.primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        ...style,
        backgroundColor: backgroundColor,
      }}
    >
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    minWidth: 50,
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
