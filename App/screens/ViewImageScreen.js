import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.icon, ...styles.deleteIcon }} />
      <View style={{ ...styles.icon, ...styles.closeIcon }} />
      <Image
        style={styles.img}
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 45,
  },
  deleteIcon: {
    backgroundColor: colors.primaryColor,
    left: 35,
  },
  closeIcon: {
    backgroundColor: colors.secondaryColor,
    right: 35,
  },
});
