import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AVATAR1} from '../../assets/images';

const BoxChat = ({source, title, text, time, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.row, styles.container]}>
    <Image style={styles.image} source={source} />
    <View style={styles.wrapBoxText}>
      <View style={[styles.row, styles.wrapText]}>
        <Text style={styles.textName}>{title}</Text>
        <Text style={styles.textTime}>{time}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default BoxChat;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b2d5a',
  },
  wrapBoxText: {
    width: 250,
  },
  wrapText: {
    justifyContent: 'space-between',
  },
  textTime: {
    fontSize: 14,
    color: '#ccc',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3b2d5a',
  },
});
