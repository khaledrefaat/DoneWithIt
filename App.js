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
import AppPicker from './App/components/AppPicker';

import AppTextInput from './App/components/AppTextInput';

import AccountScreen from './App/screens/AccountScreen';
import ListingsScreen from './App/screens/ListingsScreen';
import Screen from './App/screens/Screen';

const App = () => {
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
      {/* <ListingsScreen /> */}
    </Screen>
  );
  // return <AppTextInput />;
};

export default App;
