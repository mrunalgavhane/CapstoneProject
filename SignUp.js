//birthday
import {useState} from 'react';
import {View,ImageBackground, TextInput, StyleSheet, Text, TouchableOpacity,Image} from "react-native";
import axios from 'axios';

  const SignUp = ({navigation}) => {
    const handleSubmit = async () => {
      await axios({
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      url: 'http://192.168.0.106:8080/user',
      data: {
            mail: email,
            name:name,
            phone:phone,
            city:city,
            password: password   
      }
    })
      .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          alert(response.data)
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
    
}

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [city,setCity] = useState("");
const [password, setPassword] = useState("");

const validate=()=>{
  const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  const strongRegex1 = new RegExp("^[a-zA-Z_ ]*$");
  // const numReqex=new RegExp("^[1-9]\d*$");
  if((name=="")||(email=="")||(phone=="")||(city=="")||(password=="")){
    alert("Input all fields")
  }
  else if(!strongRegex1.test(name)){
    alert("Enter characters for name field")
  }
    else if(!strongRegex.test(email)){
    alert("Enter valid mail id")
  }

  else if(phone.length!=10){
    alert("Phone number length should be 10")
}
else if(strongRegex1.test(phone)){
  alert("Phone number should be digits")
}
else if(!strongRegex1.test(city)){
    alert("Enter characters for city field")
  }

 else if(password.length<8 || password.length>12){
    alert("Password length should between 8 to 12 characters")
  }
   else{

       axios({ 
              method: 'GET',
                url: 'http://192.168.0.106:8080/users/'+email,
                })
            .then(function (response){
              console.log("response",JSON.stringify(response.data))
              if(response.data.mail==email){
                
                 alert("Email already registered!");
                 
              }
              else{
                handleSubmit();
                  navigation.navigate("Login");
              }
             })
            .catch(function(error){
              console.log("error",error)
              alert(error);
            })
  
    }
}

return (
   <View style={styles.container}>
      <ImageBackground source={require('./Image/login.jpg')} resizeMode="cover" style={styles.image}>
     <Image style= {styles.image1} source={require('./Image/partyplannerlogo.png')} />
 <View style={styles.login1}>
    <Text style={styles.headertxt}>SignUp</Text>
     
       <TextInput onChangeText={(name)=>setName(name)} autoFocus style={styles.emailInput} placeholder='Name'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(email)=>setEmail(email)} style={styles.emailInput} placeholder='Email'  placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(phone)=>setPhone(phone)} style={styles.emailInput} placeholder='Enter Phone No' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(city)=>setCity(city)} style={styles.emailInput} placeholder='Enter City' placeholderTextColor='#A3C7D6'></TextInput>
     <TextInput onChangeText={(password)=>setPassword(password)} style={styles.emailInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#A3C7D6'></TextInput>
       <TouchableOpacity style={styles.button} onPress={validate}>
        <Text style={{alignItems:'center',fontSize:17,color:'black'}}>Create Account</Text>
     </TouchableOpacity>
     
</View>
       </ImageBackground>
  </View>
)
};
const styles = StyleSheet.create({
   image: {
    flex: 1,
    width:400,
    justifyContent: "center"
  },
  image1:{
   marginTop:-80,
    marginBottom:60,  
 
   width:150,
   height:30,
   backgroundColor:'#57f6da',
   
},
    headertxt:{
        fontSize: 20,
        margin:15,
        marginBottom:30,
        alignitems:'center',
        
        fontWeight: "bold",
        
    },
    login1:{
      backgroundColor:"white",
      borderColor:"white",
       marginLeft:15,
       marginRight:10,
       marginTop:100,
        paddingBottom:20,
        alignItems: 'center',        
        },
   
    container:{
        flex:1,
        width:415,
        height:100,
        alignItems: 'center',
        },
 
    emailInput: {
     width: 290,
     height: 50,
     justifyContent:"space-between",
     borderWidth: 1,
     borderRadius: 3,
     padding: 5,
     margin:5,
     marginLeft:10,
     backgroundColor:"white",
     alignitems:'center'
    },

    button: {
     backgroundColor: '#FEA396',
     marginLeft:10,
     borderRadius:5,
     marginRight:10,
     width:300,
     marginTop: 25,
     padding: 10,
     alignItems: 'center',
   },   
});
export default SignUp;