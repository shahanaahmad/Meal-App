import React, {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from './MealItem';

function MealsOverviewScreen({route, navigation}) {
  const categoryId = route.params.categoryId;
  const filteredData = MEALS.filter(mealData => {
    return mealData.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem({item}) {
    const mealDetail = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };
    return <MealItem {...mealDetail} />;
  }

  useLayoutEffect(() => {
    const mealTitle = CATEGORIES.find(
      category => category.id === categoryId,
    ).title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview {categoryId}</Text> */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
