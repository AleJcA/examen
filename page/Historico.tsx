import { View, Text } from "react-native";
import React from "react";
import { useContextBanco } from "../providers/ProviderBanco";
import ListaTransacciones from "../components/ListaTransacciones";

export default function Historico() {
  const { listaTransacciones } = useContextBanco();

  return (
    <View>
      <Text>Pantalla Histórico</Text>

      <Text>
        Total de transacciones realizadas: {listaTransacciones.length}
      </Text>

      <ListaTransacciones />
    </View>
  );
}