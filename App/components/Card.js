import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
      <View style={styles.contentContainer}>
        <AppText weight="500" style={styles.text}>
          {title}
        </AppText>
        <AppText size={16} color={colors.secondary} style={styles.text}>
          {subTitle}$
        </AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  img: {
    height: 200,
    width: '100%',
  },
  contentContainer: {
    padding: 20,
  },
  text: {
    marginVertical: 5,
  },
});
