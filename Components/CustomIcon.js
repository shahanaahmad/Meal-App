import React from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';

function CustomIcon(props) {
  return (
    <Pressable
      onPress={props.onPressHandler}
      style={({pressed}) => pressed && styles.starIcon}>
      <Image style={styles.image} source={props.icon} />
    </Pressable>
  );
}
export default CustomIcon;
const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  starIcon: {
    opacity: 0.6,
  },
});
