import React,{useState} from 'react';
import {StyleSheet,Text,View,Platform,ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function Booking({navigation,route}){
  const{title}=route.params;
  const{price}=route.params;
  const{packid}=route.params;
  const{email}=route.params;
  const [date,setDate] = useState(new Date());
  const [mode,setMode]=useState('date');
  const [show,setShow]= useState(false);
  const[Mdate,setMdate]=useState('Not selected');
  const[Mtime,setMTime]=useState('Not selected');
  const[venue,setVenue]=useState();


  const validate = () =>{
    const strongRegex1 = new RegExp("^[a-zA-Z_ ]*$");

    if((venue=="")||(Mdate=="Not selected")||(Mtime=="Not selected")){
      alert("Input all the feilds")
    }
    else if(!strongRegex1.test(venue)){
      alert("Enter characters for venue field")
    }
    else{
      navigation.navigate('Payment',{email,title,packid,venue,Mdate,Mtime,price})
    }

  }
  


  const onChange = (event,selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate = new Date(currentDate);
    //let fDate = 'Date is: ' + tempDate.getDate() + ' / ' + (tempDate.getMonth() + 1) + ' / ' + tempDate.getFullYear();
    //let fTime = 'Time is: ' + tempDate.getHours() + ':' + tempDate.getMinutes();

    let Mdate = tempDate.getDate() + ' / ' + (tempDate.getMonth() + 1) + ' / ' + tempDate.getFullYear();
    let Mtime = tempDate.getHours() + ':' + tempDate.getMinutes();

    setMdate(Mdate)
    setMTime(Mtime)
    
    console.log(Mdate+ '(' + Mtime)
   // console.log(fDate + '(' + fTime + ')') 
    }

    const showMode = (currentMode)=>{
      setShow(true);
      setMode(currentMode);
    }

  return (
    
     <ImageBackground source={require('./Image/login.jpg')} resizeMode="cover" style={styles.image}>
     <View style={styles.container}>
     
      <View style={styles.main}>
      <Text style={{paddingLeft:125,fontWeight:'bold',fontSize:20}}>Booking</Text>
        <Text></Text>
       <Text style={{alignItems:'center',fontSize:13,color:'black',fontWeight:'bold'}}>Title: {title}</Text>  
       <Text style={{alignItems:'center',fontSize:13,color:'black',fontWeight:'bold'}}>Price:Rs.{price}/-</Text> 
       <Text style={{alignItems:'center',fontSize:13,color:'black',fontWeight:'bold'}}>PackId:{packid}</Text>  
       <Text style={{alignItems:'center',fontSize:13,color:'black',fontWeight:'bold'}}>Email:{email}</Text> 

       <Text ></Text> 

       <Text style={{paddingLeft:90,fontWeight:'bold'}}>Fill the remaining details!</Text>

       <TextInput
            onChangeText={(venue) => setVenue(venue)}
            style={styles.emailInput}
            placeholder="Enter venue"
        /> 
           

        <View style={{paddingTop:10}}>
           <TouchableOpacity style={styles.button}  onPress={()=> showMode('date')} >
             <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Select a date</Text>
           </TouchableOpacity>
           <Text style={{paddingTop:20, paddingLeft:100, justifyContent:'center', alignContent:'center',fontSize:14,fontWeight:'bold'}}>Date is: {Mdate}</Text>
       
        </View>
      
        <View style={{paddingTop:10 }}>
          <TouchableOpacity style={styles.button}  onPress={()=> showMode('time')} >
            <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Select a time</Text> 
          </TouchableOpacity> 
        </View>
      <View>
        
      </View> 
      
        <Text style={{paddingTop:20, paddingLeft:100, justifyContent:'center', alignContent:'center',fontSize:14,fontWeight:'bold'}}>Time is: {Mtime}</Text>
        
        <View style={{paddingTop:10}}>
        <TouchableOpacity style={styles.button} onPress={validate}>
          <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Proceed</Text>
      </TouchableOpacity>
       </View> 
        
      </View>
       {
        show &&(
          <DateTimePicker
          testID='dateTimePicker' 
          minimumDate={new Date(2022, 10, 28)}
          maximumDate={new Date(2023, 10, 20)}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
          />
         )
       }
   
    </View>
    </ImageBackground>
  );
}

const styles =StyleSheet.create({
    button: {
     backgroundColor: '#FEA396',
     borderRadius:10,
     marginLeft:20,
     marginRight:10,
     width:290,
     marginTop: 20,
     padding: 10,
     alignItems: 'center',
   },    
          main:{
            marginBottom:400,
            width:350,
            borderRadius:12,
            height:550,
            borderWidth:2,
            padding:10,
            backgroundColor:"white",
          
          },
          emailInput: {
            width: 290,
            height: 50,
            justifyContent:"space-between",
            borderWidth: 1,
            borderRadius: 3,
            paddingLeft: 10,
            margin:5,
            marginLeft:20,
            backgroundColor:"white",
            alignitems:'center'
           },
  
  container:{
     marginTop:100,
     flexDirection:'row',
     
    alignItems:'center',
    justifyContent:'center',
  }
 

})