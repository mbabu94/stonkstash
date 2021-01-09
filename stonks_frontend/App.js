import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Login from './welcome/components/Login/Login';


const Authstack = createStackNavigator(); 

export default ()=>(
  <NavigationContainer>
    <Authstack.Navigator>
      <Authstack.Screen name = "Login" component = {Login}/>
    </Authstack.Navigator>
  </NavigationContainer>
);

// export default class App extends Component {
//   render(){
//     return (
//       <View style ={styles.container}>
//         //<Login/>
//       </View>
      
   
//     );

//   }
  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});