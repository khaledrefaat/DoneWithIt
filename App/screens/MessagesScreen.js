import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import ItemSeparator from '../components/ItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 2,
    title: 'T1',
    description: 'D1',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 3,
    title: 'T1',
    description: 'D1',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 4,
    title: 'T1',
    description: 'D1',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
];

const MessagesScreen = () => {
  const [userMessages, setUserMessages] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);

  const handelDelete = item =>
    setUserMessages(messages =>
      messages.filter(message => message.id.toString() !== item.id.toString())
    );

  return (
    <FlatList
      data={userMessages}
      keyExtractor={userMessages => userMessages.id.toString()}
      style={styles.list}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => console.log('Message Selected Object: ', item)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handelDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setUserMessages(messages);
      }}
    ></FlatList>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  list: {},
});
