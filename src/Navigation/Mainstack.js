import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import BottomStack from '../StackNavigator/Bottomtab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="BottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
