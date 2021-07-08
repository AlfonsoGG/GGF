import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MiStackGeneral from "./MiStackGeneral";

const Tab = createBottomTabNavigator();

const MiBottonTab = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Alegria">
        {(props) => <MiStackGeneral {...props} nombreRutaInicial="Alegria" />}
      </Tab.Screen>
      <Tab.Screen name="Enojo">
        {(props) => <MiStackGeneral {...props} nombreRutaInicial="Enojo" />}
      </Tab.Screen>
      <Tab.Screen name="Sorpresa">
        {(props) => <MiStackGeneral {...props} nombreRutaInicial="Sorpresa" />}
      </Tab.Screen>
      <Tab.Screen name="Dolor">
        {(props) => <MiStackGeneral {...props} nombreRutaInicial="Dolor" />}
      </Tab.Screen>

    </Tab.Navigator>
  );
};

/* const styles = StyleSheet.create({
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
}); */

export default MiBottonTab;
