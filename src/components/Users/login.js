import React from 'react';
import {View, Text, Button} from 'react-native';
import {socket} from '../../store/actions/chatActions';

const Login = ({navigation}) => {
  socket.emit('getUsers');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button
        title="Go to UserList"
        onPress={() => navigation.navigate('UserList')}
      />
    </View>
  );
};

export default Login;
