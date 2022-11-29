import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Card1 from './screens/Card1';
import FlowerTheme from './screens/FlowerTheme';
import BalloonTheme from './screens/BalloonTheme';
import DTheme from './screens/DTheme';
import Booking from './screens/Booking';
import Payment from './screens/Payment';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>
      <Stack.Screen name="Card1" component={Card1}></Stack.Screen>
          <Stack.Screen name="FlowerTheme" component={FlowerTheme}></Stack.Screen>
          <Stack.Screen name="BalloonTheme" component={BalloonTheme}></Stack.Screen>
           <Stack.Screen name="DTheme" component={DTheme}></Stack.Screen>
           <Stack.Screen name="Booking" component={Booking}></Stack.Screen>
         
           <Stack.Screen name="Payment" component={Payment}></Stack.Screen>
     
     
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});