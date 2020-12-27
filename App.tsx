import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Routers.
import UserScreen from './src/components/Users';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
