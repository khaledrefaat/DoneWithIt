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
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Screen from './App/screens/Screen';
import ViewImageScreen from './App/screens/ViewImageScreen';
import WelcomeScreen from './App/screens/WelcomeScreen';
import Card from './App/components/Card';
import ListingDetailsScreen from './App/screens/ListingDetailsScreen';
import MessagesScreen from './App/screens/MessagesScreen';
import AppIcon from './App/components/AppIcon.js';
import colors from './App/config/colors';
import ListItem from './App/components/ListItem';

const App = () => {
  return (
    <Screen>
      <AppIcon name="email" />
      <AppIcon name="format-list-bulleted" backgroundColor={colors.primary} />
      <ListItem
        title="my title"
        IconContainer={() => <AppIcon name="email" />}
      />
    </Screen>
  );
};

export default App;
