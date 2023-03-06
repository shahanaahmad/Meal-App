import React from 'react';
import {View, StyleSheet, Text, Pressable, Platform} from 'react-native';

function CategoryGridTile({item, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={styles.innerContainer(item.color)}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.54,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  innerContainer: color => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: color,
    borderRadius: 8,
  }),
  title: {
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.54,
  },
});
