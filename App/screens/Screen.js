import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
