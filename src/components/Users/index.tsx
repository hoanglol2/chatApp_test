import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


// Use components.
import UserChat from './UserChat';
import UserList from './UserList';
import Message from '../Messages';
import Login from './login';


const UserScreen = () => {
  const Stack = createStackNavigator();

  return (
    <>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
    
    </>
  );
};

export default UserScreen;
