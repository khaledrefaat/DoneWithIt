import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import ViewImageScreen from './App/screens/ViewImageScreen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import Card from './App/components/Card';
import ListingDetailsScreen from './App/screens/ListingDetailsScreen';

const App = () => {
  // return <WelcomeScreen></WelcomeScreen>;
  // return <ViewImageScreen />;
  // return (
  //   <View style={styles.container}>
  //     <Card
  //       title="Red Jacket For Sale"
  //       subTitle="299"
  //       image="https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  //     />
  //     <Card
  //       title="Lauren and the Blue Dress For Sale"
  //       subTitle="899"
  //       image="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  //     />
  //   </View>
  // );
  return (
    <ListingDetailsScreen
      image="https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
      title="Black Outfit For sale"
      price="899"
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});
