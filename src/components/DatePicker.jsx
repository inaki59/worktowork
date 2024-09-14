import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'; 
import { useDatepickerHook } from '../hooks';


export const DatePicker = ({desc}) => {
    const { date, mode, show, text,pepe, onChange, showMode,minDate,setpepe,prueba } = useDatepickerHook();
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.headerText}>{desc}  {date ? moment(date).format('DD/MM/YYYY HH:mm') : 'No se ha seleccionado ninguna fecha'}</Text>
        <Text>hola</Text>
      <View style={styles.buttonContainer}>
        <Button title="Fecha" onPress={() => showMode('date')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Hora" onPress={() => showMode('time')} />
      <Text style={styles.textcenter}>¿Cuantas horas va a durar la jornada?</Text>
   
      
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          minimumDate={minDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
   
    </View>
  )
 
}
const styles = StyleSheet.create({
    container: {

      paddingTop: 20,
      paddingHorizontal: 16,
      backgroundColor: '#fff',
    },
    headerText: {
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    buttonContainer: {
      marginVertical: 10,
    },
    resultText: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
    textcenter:{
       fontSize: 17,
      
    },
   
    
  });
