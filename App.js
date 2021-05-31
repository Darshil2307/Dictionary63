import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import { Header } from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';

export default class App extends React.Component{
  render(){
     return(
         <HomeScreen/>
     ) 
  }  
}