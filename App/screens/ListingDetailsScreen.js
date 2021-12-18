import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ image, title, price }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <AppText size={20} style={styles.text} weight="500">
          {title}
        </AppText>
        <AppText style={styles.text} color={colors.secondary}>
          {price}
        </AppText>
      </View>
      <ListItem
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        title="kimson doan"
        subTitle="5 Listings"
      />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 15,
  },
  text: {
    marginVertical: 5,
  },
});
