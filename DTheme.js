import {useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";

function DTheme({navigation,route}) {

   const[title,setTitle]=useState('2D Theme Decoration');
   const[price,setPrice]=useState('13400');
   const[packid,setPackId]=useState('P103');
   const{email}=route.params;

  return (
   <ScrollView>
      <View style={styles.container}>
        <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#155F13',color:'white'}}>PartyPlanner</Text>
        <Text style={{paddingLeft:10,alignItems:'center',fontSize:17,color:'white',fontWeight:'bold',backgroundColor:'#155F13'}}>Hello! {email}</Text>  
  
        <Image style={{marginTop:1,width:398,height:300}}source={require('./Image/2dtheme.jpg')}/>
        <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#155F13',color:'white'}}> 2D 
  Theme</Text>
 
        <View>
        <Text style={{padding:10,fontSize:17}}> Kids love cartoon character so continue here and invite them on their birthday party. We use high quality and unique products in room decorations. We use our years of experience to create an amazing decorations for your special or surprise party.</Text>
        </View>
    
    <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#155F13',color:'white'}}>
    Inclusive</Text>
   <View style={{padding:10}}>
    <Text style={{padding:10,fontSize:18}}>
     - Theme banner according to the stage size
    </Text>
     <Text style={{padding:10,fontSize:18}}>
    - 2 Balloon pillars & 1 rectangular balloon arch on stage
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Theme cutouts
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Custom balloon arc at the entrance
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Hall Decoration with choice of flowers
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Cake table decoration
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Streamers & Curley ribbons for elegance
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Entrance decoration with balloon bunches
    </Text>
   </View>
   <Text style={{padding:10,fontWeight:'bold',fontSize:18,marginLeft:20}}>Price: Rs.13,400/-</Text>
     <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:17,color:'white'}}
        onPress={() =>
        navigation.navigate('Booking',{email,title,price,packid})}
        >Book Now</Text>

     </TouchableOpacity>
       
   </View>
    </ScrollView>

 )
}
export default DTheme;
const styles = StyleSheet.create({
container:{
  flex:1,
  //justifyContent:'center',
  borderWidth:1,
  margin:5,
 // alignItems:'center',
  borderRadius:7
  },
  button: {
     backgroundColor: '#155F13',
     marginLeft:10,
     marginRight:10,
     borderRadius:8,
     width:250,
     marginTop: 25,
     padding: 10,
     alignItems: 'center',
   }, 
});