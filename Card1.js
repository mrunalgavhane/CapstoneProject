import React from "react";
import { Text, ImageBackground, StyleSheet, ScrollView, View,Image ,TouchableOpacity} from "react-native";
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import Login from "./Login";

const Card1 = ({navigation,route}) => {
  const{email}=route.params;

  return(
  <View style={styles.container}>
  
  <ScrollView>
    <ImageBackground source={require('./Image/blue.jpg')} resizeMode="cover" style={styles.image}>
    <Image style= {styles.image1} source={require('./Image/partyplannerlogo.png')} />
      <Text style={styles.text}>{email}</Text> 
      <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Login')}>
          <Text style={{paddingLeft:340,fontSize:18,color:'black',fontWeight:'bold'}}>Logout</Text>
      </TouchableOpacity>
      
       <Card style={styles.main}>
        <Card style={styles.image}>
        <Card.Content>
            <Title style={styles.title}>Balloon Decoration</Title>
        </Card.Content>
        <Card.Cover source={require('./Image/balloon.jpg')}/>
       <Card.Content>
        <Paragraph>Looking for balloon decoration theme, your wait is over proceed to book..</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() =>
        navigation.navigate('BalloonTheme',{email})}>View More</Button>
        </Card.Actions>
        </Card>
       </Card>
       
       <Card style={styles.main}>
       <Card style={styles.image}>
        <Card.Content>
            <Title style={styles.title}>Flower Decoration</Title>
        </Card.Content>
        <Card.Cover source={require('./Image/flower1.jpg')} />
       <Card.Content>
        <Paragraph> Flowers can make your heart smile so continue and let us decorate with beautiful flowers.. </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() =>
        navigation.navigate('FlowerTheme',{email})}>View More</Button>
        </Card.Actions>
        </Card>
       </Card>
     
       <Card style={styles.main}>
       <Card style={styles.image}>
        <Card.Content>
            <Title style={styles.title}>2D Theme Decoration</Title>
        </Card.Content>
        <Card.Cover source={require('./Image/2dtheme1.jpg')} />
       <Card.Content>
        <Paragraph>Kids love cartoon character so continue here and invite them on their birthday party</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() =>
        navigation.navigate('DTheme',{email})}>View More</Button>
        </Card.Actions>
        </Card>
      </Card>
     
  </ImageBackground>
    </ScrollView>
  </View>
  )
          };

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  image: {
    //flex: 1,
 //   height:800,
    justifyContent: "center"
  },
  image1:{
   marginTop:30,
   borderRadius:1,
    marginLeft:10,
   width:200,
   height:30,
   backgroundColor:'#57f6da',
   
},
  main:{
      borderWidth:2,
     margin:10,
     
    },
    title:{
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'#f4dbd5',
    marginLeft:85,
    marginRight:95
    
    },
  text: {
    paddingLeft:10,
    borderRadius:6,
    marginLeft:10,
    color: "black",
    fontSize: 20,
    width:200,
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#f4dbd5"
  }
});

export default Card1;