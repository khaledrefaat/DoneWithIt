import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconContainer,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        renderRightItems
        onPress={onPress}
        underlayColor={colors.lgihtGray}
      >
        <View style={styles.container}>
          {<IconContainer />}
          {image && (
            <Image
              style={styles.img}
              source={{
                uri: image,
              }}
            />
          )}
          <View style={styles.contentContainer}>
            <AppText weight="600" style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText color={colors.mediumGray} size={16}>
                {subTitle}
              </AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 15,
    paddingVertical: 15,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  contentContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 5,
    textTransform: 'capitalize',
  },
});
