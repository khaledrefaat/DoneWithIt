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

import AccountScreen from './App/screens/AccountScreen';
import ListingsScreen from './App/screens/ListingsScreen';

const App = () => {
  return <ListingsScreen />;
};

export default App;
