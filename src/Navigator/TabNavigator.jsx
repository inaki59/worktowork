import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainScreen, SwapScreen, GroupScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
      }}
   >
      <Tab.Screen name="Main" component={MainScreen}  />
      <Tab.Screen name="Swap" component={SwapScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};