import React, {useContext, useLayoutEffect, useCallback} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import CustomIcon from '../Components/CustomIcon';
import {MEALS} from '../data/dummy-data';
import FavouritesContextProvider from '../stores/context/favourite-context';
import List from './List';
import MealDetail from './MealDetail';
function MealsDetailScreen({route, navigation}) {
  const contextObj = useContext(FavouritesContextProvider);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS?.find(item => item.id === mealId);

  let mealIsFav = contextObj?.ids?.includes(mealId);

  const headerBtnPressHandler = useCallback(() => {
    if (mealIsFav) {
      contextObj?.removeFavorite(mealId);
    } else {
      contextObj?.addFavorite(mealId);
    }
  }, [contextObj, mealIsFav, mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <CustomIcon
            icon={
              mealIsFav
                ? require('../assets/image/star1.png')
                : require('../assets/image/star2.png')
            }
            onPressHandler={headerBtnPressHandler}
          />
        );
      },
    });
  }, [navigation, mealIsFav, headerBtnPressHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetail
        textStyle={styles.detailText}
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
      </View>

      <View>
        <List itemData={selectedMeal.ingredients} />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        <List itemData={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  imageStyle: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    margin: 8,
  },
  detailText: {
    color: 'white',
    // fontSize: 20,
    // fontWeight: 'bold',
  },
  subTitle: {
    color: '#e2b497',

    textAlign: 'center',
    fontSize: 18,

    fontWeight: 'bold',
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
