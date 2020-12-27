import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CALL, VIDEOCALL} from '../../assets/images';

const boxIcon = [{icon: CALL}, {icon: VIDEOCALL}];

const TopInfoTab = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Ahoang Nguyễn</Text>
    <View style={styles.wrapIcon}>
      {boxIcon.map(({icon}, index) => (
        <TouchableOpacity style={styles.boxIcon} key={index}>
          <Image style={styles.icon} source={icon} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default TopInfoTab;

const row = {
  flexDirection: 'row',
  alignItems: 'center',
};

const alignCenter = {
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    ...row,
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  icon: {
    width: 25,
    height: 25,
  },
  wrapIcon: {...row},
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    width: 100,
    lineHeight: 30,
  },
  boxIcon: {
    width: 40,
    height: 40,
    ...alignCenter,
    backgroundColor: '#868acb',
    borderRadius: 40,
    marginLeft: 15,
  },
});
