import React from 'react';
import { View, StyleSheet } from 'react-native';
import PreLoader from './src/Components/PreLoader';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Camera from './src/screens/Camera';
import { NavigationContainer } from '@react-navigation/native';
import MiStackGeneral from './src/Components/MiStackGeneral'
import MiBottonTab from './src/Components/MiBottonTab'
import AppNavigator from './src/navigator/Navigator'
import {AppLoading} from 'expo'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';




export default function App() {
  return (
   <NavigationContainer>
     <MiBottonTab></MiBottonTab>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
})