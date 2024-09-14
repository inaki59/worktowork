import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDatepickerHook } from '../hooks';

export const CreateJourny = () => {
    console.log("Renderizando CreateJourny"); 
    const { date, mode, show, text,pepe, onChange, showMode,minDate,setpepe,prueba } = useDatepickerHook();
  return (
    <View>
        <TextInput

style={styles.input}
onChangeText={setpepe}
value={pepe}
keyboardType="numeric" 
placeholder="Ingrese horas" 
placeholderTextColor="#888" 
maxLength={2} 
/>
<TouchableOpacity style={styles.finishButton} >

<Text style={styles.finishButtonText} onPress={prueba}>Confirmar</Text>
</TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
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
    color: '#fff', // Texto blanco
    fontSize: 18,
   
    fontWeight: '600',
    textAlign: 'center',
  },
})