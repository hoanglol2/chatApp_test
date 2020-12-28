import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Bot} from '../../assets/images';
import UserContent from './UserContent';
import UserHeader from './UserHeader';
import {ChatUserList} from '../../store/actions/chatActions';

const UserList = ({navigation}) => {
  ChatUserList();

  return (
    <>
      <View style={styles.container}>
        <UserHeader />
        <UserContent onPress={() => navigation.navigate('Message')} />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Image source={Bot} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5b61b9',
    flex: 1,
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
