import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import AppIcon from '../components/AppIcon';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Screen from './Screen';
import ItemSeparator from '../components/ItemSeparator';

const items = [
  {
    title: 'my listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'my messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screenContainer}>
      <ListItem
        title="Khaled Elkady"
        subTitle="khaledrefaat08@gmail.com"
        image="https://khaledrefaat.github.io/portfolio/assets//home-picture.jpg"
        style={styles.listItem}
      />
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={items => items.title}
          ItemSeparatorComponent={ItemSeparator}
          style={styles.list}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              style={styles.listItemStyle}
              IconContainer={() => (
                <AppIcon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              )}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        style={styles.listItem}
        IconContainer={() => (
          <AppIcon backgroundColor="#fdcb6e" name="logout" />
        )}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.lgihtGray,
  },
  listItem: {
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    marginVertical: 30,
  },
  listItemStyle: {},
});
