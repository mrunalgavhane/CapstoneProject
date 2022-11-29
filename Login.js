import { useState } from "react";
import { ImageBackground,View, TextInput, StyleSheet, Text, TouchableOpacity,Image} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const Login = ({navigation}) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 const handleSubmit = async () => {
     await axios({ 
              method: 'GET',
              url: 'http://192.168.0.106:8080/users/'+email,
              })
          .then(function (response){
             console.log("response",JSON.stringify(response.data))
             if(email==response.data.mail && password==response.data.password){
                alert("Login Successful");
                navigation.navigate("Card1",{email});
            }
            else{
                alert("Incorrect Credentials")
            }
         })
    .catch(function(error){
            console.log("error",error)
            alert(error);
        })
    }
     
 return (
    <View style={styles.container}>
    <ImageBackground source={require('./Image/login.jpg')} resizeMode="cover" style={styles.image}>
     <Image style= {styles.image1} source={require('./Image/partyplannerlogo.png')} />
    <View style={styles.login1}>
    <Text style={styles.headertxt}>Login</Text>
    
      <TextInput 
         onChangeText={(text) => setEmail(text)}
         value={email}
         style={styles.emailInput}
         placeholder="Enter your mail id"
     />
     <TextInput
         onChangeText={(text) => setPassword(text)}
         value={password}
         style={styles.emailInput}
         secureTextEntry={true}         
         placeholder="Enter your password"
     />  
     <TouchableOpacity style={styles.button} onPress={handleSubmit} >
        <Text style={{alignItems:'center',fontSize:17,color:'white'}}>Login</Text>
     </TouchableOpacity>

     <Text style={styles.account} onPress={() =>
        navigation.navigate('SignUp')
      }>Create an account?</Text>
    </View>
    </ImageBackground>
  </View>
 )
};
const styles = StyleSheet.create({

  image: {
    flex: 1,
    width:410,
    
    justifyContent: "center"
  },
  image1:{
      marginTop:-200,   
      marginBottom:100,  
   
     width:140,
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
    account:{
        marginTop:12,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color:"black",
        textDecorationLine: 'underline',
    },
    container:{
        flex:1,
        width:410,
        height:100,
        alignItems: 'center',
        },
 
    emailInput: {
    // borderColor:"blue",
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
     borderRadius:5,
     marginLeft:10,
     marginRight:10,
     width:300,
     marginTop: 25,
     padding: 10,
     alignItems: 'center',
   },   
});
export default Login;