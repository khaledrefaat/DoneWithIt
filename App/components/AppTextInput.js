import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/defaultStyles';

const AppTextInput = ({ icon, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...props} />
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color={defaultStyles.colors.mediumGray}
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default AppTextInput;

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
    marginLeft: 'auto',
    marginRight: 10,
  },
});
