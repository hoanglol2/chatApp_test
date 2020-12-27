import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  AVATAR1,
  AVATAR2,
  AVATAR3,
  AVATAR4,
  AVATAR5,
  Status,
} from '../../assets/images';

const topSearchImage = [
  {src: AVATAR1, notification: true},
  {src: AVATAR2, notification: false},
  {src: AVATAR3, notification: false},
  {src: AVATAR4, notification: true},
  {src: AVATAR5, notification: false},
  {src: AVATAR1, notification: true},
  {src: AVATAR2, notification: false},
  {src: AVATAR3, notification: false},
  {src: AVATAR4, notification: true},
  {src: AVATAR5, notification: false},
];

const TopStatus = () => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {topSearchImage.map(({src, notification}, index) => (
        <TouchableOpacity key={index} style={styles.image}>
          <Image style={styles.wrapImage} source={src} />
          {notification ? (
            <View style={styles.icon}>
              <Image source={Status} />
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default TopStatus;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: -20,
    right: -20,
  },
  wrapImage: {
    width: 60,
    height: 60,
  },
});
