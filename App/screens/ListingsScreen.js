import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from './Screen';

const listings = [
  {
    id: 1,
    title: 'Dress for sale',
    price: 800,
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 1,
    title: 'Outfit for sale',
    price: 800,
    image:
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={list => list.id.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} subTitle={item.price} />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.lgihtGray,
  },
});
