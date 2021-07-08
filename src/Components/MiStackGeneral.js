import React from "react";
import { View, Text, Image, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Camera from "../screens/Camera";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Alegria = ( {navigation,route}) => {
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
      <Text style={{ fontSize: 40 }}>
        Alegría
      </Text>

      <Text style={{ fontSize: 25}}>
        Consejo para imitar el gesto
      </Text>

      <Text style={{ fontSize: 20}}>1.- Ceja levantada</Text>
      <Text style={{ fontSize:20}}>2.- Mirada directamente</Text>
      <Text style={{ fontSize: 20}}>3.- Boca sonriente</Text>
      <Text style={{ fontSize: 20}}>4.- Mejillas levantadas</Text>
      <Image
        source={require("../images/alegria.jpg")}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          
        }}
      />
      <Button
        title = "Aprender"
        onPress = {() => { navigation.push('Camera') }}
      />

      
    </View>
  );
};

const  Enojo= ({navigation,route}) => {
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
      <Text style={{ fontSize: 40 }}>
        Enojo
      </Text>

      <Text style={{ fontSize: 25}}>
        Consejo para imitar el gesto
      </Text>

      <Text style={{ fontSize: 20}}>1.- cejas arqueadas fruncir el ceño</Text>
      <Text style={{ fontSize:20}}>2.- Mirada directamente</Text>
      <Text style={{ fontSize: 20}}>3.- labios apretados y mandíbula</Text>
      <Text style={{ fontSize: 20}}>4.- cara contorsionada</Text>
      <Image
        source={require("../images/enojado.jpg")}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          
        }}
      />
      <Button
        title = "Aprender"
        onPress = {() => { navigation.push('Camera') }}
      />
    </View>
  );
};

const Sorpresa = ({navigation,route}) => {
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
      <Text style={{ fontSize: 40 }}>
        Sorpresa
      </Text>

      <Text style={{ fontSize: 25}}>
        Consejo para imitar el gesto
      </Text>

      <Text style={{ fontSize: 20}}>1.- Ceja levantada</Text>
      <Text style={{ fontSize:20}}>2.- Ojos bien abiertos</Text>
      <Text style={{ fontSize: 20}}>3.- Boca abierta</Text>
      <Text style={{ fontSize: 20}}>4.- Mejillas levantadas</Text>
      <Image
        source={require("../images/sorpresa.png")}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          
        }}
      />
      <Button
        title = "Aprender"
        onPress = {() => { navigation.push('Camera') }}
      />
    </View>
  );
};

const Dolor = ({navigation,route}) => {
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
      <Text style={{ fontSize: 40 }}>
        Dolor
      </Text>

      <Text style={{ fontSize: 25}}>
        Consejo para imitar el gesto
      </Text>

      <Text style={{ fontSize: 20}}>1.- Ceja caida</Text>
      <Text style={{ fontSize:20}}>2.- Ojo medio cerrado</Text>
      <Text style={{ fontSize: 20}}>3.- Boca curvada hacia abajo </Text>
      <Text style={{ fontSize: 20}}>4.- Mejillas desinfladas</Text>
      <Image
        source={require("../images/dolor.png")}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
          
        }}
      />
      <Button
        title = "Aprender"
        onPress = {() => { navigation.push('Camera') }}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const MiStackGeneral = ({ nombreRutaInicial }) => {
  return (
    <Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
      <Stack.Screen name="Alegria" component={Alegria} />
      <Stack.Screen name="Enojo" component={Enojo} />
      <Stack.Screen name="Sorpresa" component={Sorpresa} />
      <Stack.Screen name="Dolor" component={Dolor} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default MiStackGeneral;
