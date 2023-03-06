import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function List({itemData}) {
  return itemData.map(item => (
    <View style={styles.listView}>
      <Text style={styles.textStyle} key={item}>
        {item}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listView: {
    margin: 13,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 25,
    borderRadius: 6,
    backgroundColor: '#e2b497',
  },
  textStyle: {
    color: '#351401',
    textAlign: 'center',
  },
});
