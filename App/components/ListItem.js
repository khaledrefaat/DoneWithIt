import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
      <View style={styles.contentContainer}>
        <AppText weight="600" style={styles.title}>
          {title}
        </AppText>
        <AppText color={colors.lightGrey} size={16}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 10,
  },
  contentContainer: {},
  title: {
    marginBottom: 5,
    textTransform: 'capitalize',
  },
});
