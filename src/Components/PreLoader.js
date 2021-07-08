import React, {Component} from 'react';
import {ActivityIndicator ,View, StyleSheet, Dimensions } from 'react-native';
import Toast from 'react-native-simple-toast';


const {height} = Dimensions.get('window')

async function Sesion() {
  Toast.show("Sesion Iniciada Correctamente",Toast.LONG)
}
export default class PreLoader extends Component {
  render () {
      return (
        <View style={[styles.preloader]}>
            <ActivityIndicator style = {{height: 80}} size="large"/>
            
            
        </View>
      );
  }
}


const styles = StyleSheet.create({
  preloader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    height: height,
    backgroundColor: '#A8FFF6',
  }
});
