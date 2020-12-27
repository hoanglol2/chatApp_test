import React from 'react';
import {View, StyleSheet} from 'react-native';
import BoxChatHeader from '../BoxChat/BoxChatHeader';
import BoxChatMain from '../BoxChat/BoxChatMain';


const Message = ({navigation}: any) => (
  <View style={styles.container}>
    <BoxChatHeader onPress={() => navigation.navigate('UserList')} />
    <BoxChatMain />
  </View>
);

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5b61b9',
  },
});
