import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const ItemSeparator = ({ color = colors.lgihtGray }) => {
  return <View style={{ ...styles.separator, backgroundColor: color }} />;
};

export default ItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
  },
});
