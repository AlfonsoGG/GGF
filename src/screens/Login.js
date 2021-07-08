import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import { Dimensions } from "react-native";
import { ToastAndroid } from "react-native";
const { width, height } = Dimensions.get("window");
import Toast from 'react-native-simple-toast';

async function Sesion() {
  Toast.show("Sesion Iniciada Correctamente",Toast.LONG)
}
export default class Login extends React.Component {
    
  render() {
    const {navigate} = this.props.navigation
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: width,
        }}
      >
        <Image
          source={require("../images/logo.png")}
          resizeMode="contain"
          style={{
            width: 200,
            height: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Card
          wrapperStyle={{
            paddingLeft: 10,
            width: width - 100,
            height: height / 3.5,
          }}
          title="Iniciar Sesion"
        >
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#000000"
            style={styles.inputs}
          />

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#000000"
            style={styles.inputs}
          />

          <TouchableOpacity style={styles.button} onPress={()=>navigate('Register')}>
            <Text>Iniciar Sesion</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
  },
  inputs: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: "#ff0000",
    borderRadius: 23,
    paddingVertical: 2,
    width: "100%",
  },
});
