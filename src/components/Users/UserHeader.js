import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopStatus from '../TopStatus/TopStatus';

const UserHeader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chat with your friends</Text>
    <TopStatus />
  </View>
);

export default UserHeader;

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    width: 180,
    marginTop: 20,
    marginLeft: 30,
  },
});
