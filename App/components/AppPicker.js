import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText';

const AppPicker = ({ icon, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color={defaultStyles.colors.mediumGray}
          style={styles.icon}
        />
      )}
      <AppText>{placeholder}</AppText>
      <TextInput style={styles.textInput} {...props} />
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.colors.mediumGray}
        style={[styles.icon, styles.chevron]}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lgihtGray,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
