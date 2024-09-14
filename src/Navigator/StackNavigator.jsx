import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupScreen, MainScreen, SwapScreen } from '../screens'


export const StackNavigator = () => {
  return (
    <Stack.Navigator
    
    screenOptions={{headerShown:false}}>
      <Stack.Screen  name="MainScreen"  component={MainScreen} />
      <Stack.Screen name="SwapScreen" component={SwapScreen} />
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
    </Stack.Navigator>
  )
}



