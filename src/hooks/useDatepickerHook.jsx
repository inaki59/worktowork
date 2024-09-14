import React,{useEffect, useState} from 'react'
import moment from 'moment'; 
export const useDatepickerHook = () => {
    const [date,setDate]=useState(new Date);
    const [mode,setMode]=useState("date");
    const [show,setShow]=useState(false);
    const [text,setText]=useState("");
    const [hours,setHours]=useState("")
      const[pepe,setpepe]=useState("")
    const [minDate, setMinDate] = useState(new Date());
    useEffect(()=>{
      console.log("hours",hours)
    },[hours])
    useEffect(()=>{
      console.log("fecha escogida",moment(date).format('DD/MM/YYYY HH:mm'))
    },[date])
    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const formattedDateTime = moment(currentDate).format('DD/MM/YYYY HH:mm');
    
    setText(`${formattedDateTime}`);

    };
    const changeJourny=(hoursJourney)=>{
      const numericHours = Number(hoursJourney); // Convertir a número
      setHours(numericHours)

    }
    const prueba=()=>{
      const formattedDateTime = moment(date).format('DD/MM/YYYY HH:mm');
      const endTimeJourniy=moment(date).add(hours,"hours").format('DD/MM/YYYY HH:mm');
      console.log("por favor la fecha es ",formattedDateTime," final de jornada",endTimeJourniy)
    }
    const showMode=(currentMode)=>{
      setShow(true)
      setMode(currentMode)
    }
    return {showMode,date,mode,show,text,minDate,hours,setDate,setMode,setShow,setHours,setText,onChange,setpepe,prueba,changeJourny}
}

 

