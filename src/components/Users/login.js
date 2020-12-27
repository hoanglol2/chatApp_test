import React from 'react';
import {View, Text, Button} from 'react-native';

const Login = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Login</Text>
    <Button
      title="Go to UserList"
      onPress={() => navigation.navigate('UserList')}
    />
  </View>
);

export default Login;
