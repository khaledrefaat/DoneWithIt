import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

const WelcomeScreen = props => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => console.log('login button was clicked!')}
        />
        <AppButton
          title="register"
          backgroundColor={colors.secondary}
          onPress={() => console.log('register button was clicked!')}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tagLine: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.black,
  },
  buttonContainer: {
    width: '90%',
    marginBottom: 25,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: { width: 100, height: 100, borderRadius: 50, marginBottom: 5 },
});
