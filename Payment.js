  import {useState} from 'react';

  import {StyleSheet,Text,View,ImageBackground,Image,TextInput,TouchableOpacity} from 'react-native';
  import axios from 'axios';
  const Payment = ({navigation,route}) => {

    const{title}=route.params;
    const{price}=route.params;
    const{packid}=route.params;
    const{email}=route.params;
    const{venue}=route.params;
    const{Mdate}=route.params;
    const{Mtime}=route.params;
    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const[mm,setMM]=useState();
    const[yy,setYY]=useState();


       const validate=()=>{
      const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
      const strongRegex1 = new RegExp("^[a-zA-Z_ ]*$");
      
      if((username=="")||(number=="")||(cvv=="")||(mm=="")||(yy=="")){
        alert("Input all fields")
      }
      else if(!strongRegex1.test(username)){
        alert("Enter proper name")
      }
      else if(number.length!=16){
        alert("Card number should be 16 digits")
       }
        else if(strongRegex1.test(number)){
        alert("Enter digits for card number")
      }
      else if(cvv.length!=3){
        alert("Cvv should be 3 digits")
    }
     
    else if(strongRegex1.test(cvv)){
      alert("Enter digits for cvv number")
    }   
   else if(mm.length!=2){
        alert("Enter 2 digits for months")
    }

  else if(strongRegex1.test(mm)){
    alert("Enter digits for mm number")
  }
  else if(mm<1 || mm>12){
    alert("Enter proper month")
  }

  else if(yy.length!=4){
        alert("Enter 4 digits for year")
    }

  else if(strongRegex1.test(yy)){
    alert("Enter digits for yy number")
  }
  else if(yy<2022 || yy>2030){
    alert("Enter proper year")
  }
  else{
       
     axios({
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      url: 'http://192.168.0.106:8080/saveBook',
      data: {
        mail:email,
        package_name:title,
        package_id:packid,
        venue:venue,
        date:Mdate,
        time:Mtime,
        status:"paid"
      }
    })
      .then(function (response){
          console.log("response ", JSON.stringify(response.data))
            
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })

          axios({
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          url: 'http://192.168.0.106:8080/savePay',
          data: {
            mail:email,
            pname:username,
            pnumber:number,
            cvv:cvv,
          expiry:mm + '/' + yy,
          amount:price
          }
        })
          .then(function (response){
              console.log("response ", JSON.stringify(response.data))            
            })
            .catch(function(error){
              console.log("error",error)
              alert(error);
            })

            alert("Payment successful!!"+'\n'+"Booking Done")
            navigation.navigate('Card1',{email})

  }
}
 
  return (
      <View  style={styles.main}>
      <ImageBackground source={require('./Image/login.jpg')} resizeMode="cover" style={styles.image}>
        
      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:20}}>Payment</Text>
      
                <Image source={require('./Image/card.png')} style={{marginTop:20,width:250,height:150}}/>
                <Text></Text>
                <View style={{marginLeft:-90}}>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>Title:{title}</Text>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>PackId:{packid}</Text>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>venue:{venue}</Text>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>Date:{Mdate}</Text>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>Time:{Mtime}</Text>
                <Text style={{fontSize:14,color:'black',fontWeight:'bold'}}>Price:{price}</Text>
                </View>
            <TextInput 
            onChangeText={(text) => setUsername(text)}
          value={username}
          style={styles.emailInput}
          autoCapitalize='characters'
          placeholder="Enter card holder name"
      />
      <TextInput
          onChangeText={(text) => setNumber(text)}
          value={number}
          style={styles.emailInput}
            keyboardType={'numeric'}
            maxLength={16}       
          placeholder="Enter card number"
      />  
        <TextInput
          onChangeText={(text) => setCvv(text)}
          value={cvv}
          style={styles.emailInput}
            keyboardType={'numeric'}  
          maxLength={3}      
          placeholder="Enter your cvv"
      />  

      <View style={styles.expiry}>
        <TextInput
          onChangeText={(text) => setMM(text)}
          value={mm}
          style={{marginLeft:45,marginRight:10,width:50,borderWidth:1,borderRadius: 3,padding: 5}}
            keyboardType={'numeric'}  
          maxLength={2}      
          placeholder="MM"
          
      />

      <TextInput
          onChangeText={(text) => setYY(text)}
          value={yy}
          style={{marginRight:180,width:50,borderWidth:1,borderRadius: 3,padding: 5,marginTop:1}}
            keyboardType={'numeric'}  
          maxLength={4}      
          placeholder="YYYY"
          
      />
      </View>


        <TouchableOpacity style={styles.button}  onPress={validate}>
          <Text style={{alignItems:'center',fontSize:17,color:'white'}}>Make Payment</Text>
      </TouchableOpacity>
    

      </View> 
      </ImageBackground>
  </View>

    );
  }

  
  export default Payment;
  
  const styles = StyleSheet.create({
    container: {
      marginTop:50,
      flexDirection:'column',
      borderWidth:2,
      marginLeft:30,
      width:350,
      height:700,
      backgroundColor:"white",  
      alignItems: 'center',
    },

    button: {
      backgroundColor: '#2D5B99',
      marginLeft:10,
      marginRight:10,
      borderRadius:4,
      width:250,
      marginTop: 25,
      padding: 10,
      alignItems: 'center',
    }, 
    
    expiry:{
      flexDirection:'row',
      justifyContent:'center'
    },
    emailInput: {
      // borderColor:"blue",
      width: 250,
      height: 50,
      //flexDirection:'row',
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      margin:5,
      marginLeft:10,
      backgroundColor:"white",
      
      
      alignitems:'center'
      },
    image: {
      flex: 1,
      
      width:400,
      justifyContent: "center"
    },
    main:{
      flex:1,
    },
    
  });