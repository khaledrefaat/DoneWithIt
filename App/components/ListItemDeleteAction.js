import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="trash-outline" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
