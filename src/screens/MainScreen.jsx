import { View, StyleSheet, Text,   } from 'react-native';
import React from 'react';
import {  DatePicker } from '../components';


export const MainScreen = () => {

  return (
    <View style={styles.container}>
      <View style={{flex:1,backgroundColor:"red"}}>
      <DatePicker desc="incio del turno"/>
        </View>  
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  finishButton:{
    color:"red",
    borderRadius:30,
    marginHorizontal:"auto",
    backgroundColor:"skyblue",
    width:"50%",
   
  },
  finishButtonText: {
    color: '#fff', // Texto blanco
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});


