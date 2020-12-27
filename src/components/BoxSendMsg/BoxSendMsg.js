import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NEXT} from '../../assets/images';

const BoxSendMsg = () => (
  <View style={styles.container}>
    <TextInput placeholder="Gõ tin nhắn của bạn..." style={styles.input} />
    <TouchableOpacity style={styles.boxIcon}>
      <Image style={styles.icon} source={NEXT} />
    </TouchableOpacity>
  </View>
);

export default BoxSendMsg;

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
    width: '100%',
    height: 65,
    backgroundColor: '#f7f7f8',
    position: 'absolute',
    bottom: 30,
    left: 30,
    borderRadius: 30,
    ...row,
    justifyContent: 'space-between',
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 25,
  },
  boxIcon: {
    ...alignCenter,
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15,
    backgroundColor: '#5b61b9',
  },
});
