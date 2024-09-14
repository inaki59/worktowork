import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDatepickerHook,useValidationTime } from '../hooks'; // Asegúrate de que la ruta sea correcta

export const TimePicker = ({ desc }) => {
  // Usamos el hook pero limitamos el modo a 'time' para la selección de hora
  const { date, mode, show, text, onChange, showMode } = useDatepickerHook();
  const {isValid}=useValidationTime();
  React.useEffect(() => {
    showMode('time'); // Establece el modo de forma predeterminada a 'time'
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{desc}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Seleccionar Hora" onPress={() => showMode('time')} />
      </View>
      <Text style={styles.resultText}>{text}</Text>
      
      {show && (
        <DateTimePicker
          testID="timePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
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
});
