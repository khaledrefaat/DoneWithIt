import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Wordl!</Text>
      <TouchableOpacity>
        <Image
          style={styles.img}
          source={{
            uri: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          // fadeDuration={true}
        />
      </TouchableOpacity>
      <Button title="CLick Me!" onPress={() => alert('Clicked!')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
