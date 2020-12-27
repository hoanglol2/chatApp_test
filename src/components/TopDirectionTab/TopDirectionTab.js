import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopDirection = [{text: 'Back'}, {text: 'Search'}];

const TopDirectionTab = ({onPress}) => (
  <View style={styles.wrapTab}>
    {TopDirection.map(({text}, index) => (
      <TouchableOpacity onPress={onPress} key={index}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TopDirectionTab;

const styles = StyleSheet.create({
  wrapTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    color: '#9599c5',
    fontSize: 18,
  },
});
