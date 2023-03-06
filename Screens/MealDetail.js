import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MealDetail({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.mealDetailView, style]}>
      <Text style={[styles.mealDetail, textStyle]}>{duration}</Text>
      <Text style={[styles.mealDetail, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.mealDetail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  mealDetailView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mealDetail: {
    padding: 10,
    marginHorizontal: 10,
    fontWeight: '400',
  },
});
