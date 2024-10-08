import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'; 
import { useDatepickerHook } from '../hooks';


export const DatePicker = ({desc}) => {
    const { date, mode, show, text,hours, onChange, showMode,minDate,changeJourny,prueba } = useDatepickerHook();
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.headerText}>{desc}  {date ? moment(date).format('DD/MM/YYYY HH:mm') : 'No se ha seleccionado ninguna fecha'}</Text>
       
      <View style={styles.buttonContainer}>
        <Button title="Fecha" onPress={() => showMode('date')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Hora" onPress={() => showMode('time')} />
      
 
      
      </View>
      <View>
      <TextInput
editable
style={styles.input}
onChangeText={text=>changeJourny(text)}
value={hours}
keyboardType="numeric" 
placeholder="Ingrese horas" 
placeholderTextColor="#888" 
maxLength={2} 
/>
<TouchableOpacity style={styles.finishButton} >

<Text style={styles.finishButtonText} onPress={prueba}>Confirmar</Text>
</TouchableOpacity>
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
    input: {

      marginHorizontal:"35%",
      marginTop: 15,
      alignItems:"center",
      height: 50,
      width: 100,
      borderColor: '#007AFF', 
      borderWidth: 2,
      borderRadius: 10, 
      paddingHorizontal: 10,
      backgroundColor: '#fff', 
      fontSize: 20, 
      textAlign: 'center', 
      color: '#333', 
    },
    finishButton:{
      color:"red",
      borderRadius:30,
      marginHorizontal:"auto",
      backgroundColor:"skyblue",
      width:"50%",
      marginTop:10,
    },
    finishButtonText: {
      color: '#fff', 
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
    },
   
    
  });
