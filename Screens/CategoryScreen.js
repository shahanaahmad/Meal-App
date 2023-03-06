import React from 'react';
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

function CategoryScreen({navigation}) {
  console.log('navigation>>>>>>',navigation);
  function renderItemData({item}) {
    function onPressHandler() {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: item.id,
      });
    }
    return <CategoryGridTile item={item} onPress={onPressHandler} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={'_'}
          data={CATEGORIES}
          renderItem={renderItemData}
          keyExtractor={item => item?.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
