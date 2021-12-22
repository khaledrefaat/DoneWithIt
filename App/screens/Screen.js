import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.ScreenView, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  ScreenView: {
    flex: 1,
  },
});
