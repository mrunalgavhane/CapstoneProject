import {useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";

function FlowerTheme({navigation,route}) {

   const[title,setTitle]=useState('Flower Decoration');
   const[price,setPrice]=useState('10400');
   const[packid,setPackId]=useState('P102');
   const{email}=route.params;

  return (
   <ScrollView>
      <View style={styles.container}>
        <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#853D9A',color:'white'}}>PartyPlanner</Text>
        <Text style={{paddingLeft:10,alignItems:'center',fontSize:17,color:'white',fontWeight:'bold',backgroundColor:'#853D9A'}}>Hello! {email}</Text>  
  
        <Image style={{marginTop:1,width:398,height:300}}source={require('./Image/flower.jpg')}/>
        <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#853D9A',color:'white'}}> Flower
  Decoration</Text>
  
        <View>
        <Text style={{padding:10,fontSize:17}}>Flowers can make your heart smile so continue and let us decorate with beautiful flowers.It is one of the best room decoration team for birthday party.We use high quality and unique products in room decorations, balloon decorations,. We use our years of experience to create an amazing decorations for your special or surprise party.</Text>
        </View>
    
    <Text style={{padding:10,fontWeight:'bold',fontSize:20,backgroundColor:'#853D9A',color:'white'}}>
    Inclusive</Text>
   <View style={{padding:10}}>
    <Text style={{padding:10,fontSize:18}}>
     - Name board 
     </Text>
     <Text style={{padding:10,fontSize:18}}>
    - Arch made of Flowers
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - 2 Balloon standees near the cake table
    </Text>
    <Text style={{padding:10,fontSize:18}}>
    - Welcome board with flower standee
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
   <Text style={{padding:10,fontWeight:'bold',fontSize:18,marginLeft:20}}>Price: Rs 10,400/-</Text>
     <TouchableOpacity style={styles.button}>
        <Text style={{justifyContent:'center', alignItems:'center',fontSize:17,color:'white'}}
        onPress={() =>
        navigation.navigate('Booking',{email,title,price,packid})}
        >Book Now</Text>

     </TouchableOpacity>
       
   </View>
    </ScrollView>

 )
}
export default FlowerTheme;
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
     backgroundColor: '#853D9A',
     marginLeft:70,
     marginRight:10,
     borderRadius:8,
     width:250,
     marginTop: 25,
     padding: 10,
     alignItems: 'center',
   }, 
});