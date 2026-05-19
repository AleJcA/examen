import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Inicio from "../page/Inicio";
import Transferencias from "../page/Transferencias";
import Historico from "../page/Historico";

export default function Navegacion() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Transferencias" component={Transferencias} />
        <Tab.Screen name="Histórico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}