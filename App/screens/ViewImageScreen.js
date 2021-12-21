import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.icon, ...styles.deleteIcon }}>
        <Ionicons name="trash-outline" size={32} color={colors.primary} />
      </View>
      <View style={{ ...styles.icon, ...styles.closeIcon }}>
        <AntDesign name="close" size={32} color="white" />
      </View>
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
    position: 'absolute',
    top: 40,
    zIndex: 1000,
  },
  deleteIcon: {
    left: 35,
  },
  closeIcon: {
    right: 35,
  },
});
