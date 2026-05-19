import { View, Text, Button } from "react-native";
import React from "react";
import { useContextBanco } from "../providers/ProviderBanco";
import ListaTransacciones from "../components/ListaTransacciones";

export default function Inicio() {
  const { saldo, depositarSaldo, retirarSaldo } = useContextBanco();

  return (
    <View>
      <Text>Bienvenido a tu cuenta</Text>
      <Text>Saldo Actual: L.{saldo}</Text>

      <View style={{ marginBottom: 10 }}>
        <Button title="Depositar L.500" onPress={depositarSaldo} />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Retirar L.200" onPress={retirarSaldo} />
      </View>

      <Text>Lista de transacciones</Text>

      <ListaTransacciones />
    </View>
  );
}