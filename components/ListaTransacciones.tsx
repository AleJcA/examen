import { View, Text, FlatList } from "react-native";
import React from "react";
import { useContextBanco } from "../providers/ProviderBanco";
import { Transaccion } from "../modelos/Transaccion";

export default function ListaTransacciones() {
  const { listaTransacciones } = useContextBanco();

  return (
    <View>
      <FlatList
        data={listaTransacciones}
        keyExtractor={(item: Transaccion) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Descripción: {item.descripcion}</Text>
            <Text>Monto: L.{item.monto}</Text>
          </View>
        )}
      />
    </View>
  );
}