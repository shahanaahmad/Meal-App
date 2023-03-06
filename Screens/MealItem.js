import React from 'react';
import {View, StyleSheet, Text, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetail from './MealDetail';
function MealItem({title, imageUrl, duration, complexity, affordability, id}) {
  console.log('navigation>>>>', navigation);
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate('MealsDetailScreen', {
      mealId: id,
    });
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview {item.title}</Text> */}
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={onPressHandler}
        style={({pressed}) => (pressed ? styles.imagePressed : null)}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: imageUrl}}
              resizeMode={'cover'}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          {/* <View style={styles.mealDetailView}>
            <Text style={styles.mealDetail}>{duration}</Text>
            <Text style={styles.mealDetail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.mealDetail}>{affordability.toUpperCase()}</Text>
          </View> */}
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.54,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  imagePressed: {
    opacity: 0.5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
