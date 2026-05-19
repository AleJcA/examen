import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { useContextBanco } from "../providers/ProviderBanco";

export default function Transferencias() {
  
  const { saldo, transferirSaldo } = useContextBanco();

  const [cuenta, setCuenta] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [monto, setMonto] = useState("");

  function transferir() {
    if (cuenta === "" || destinatario === "" || monto === "") {
      Alert.alert("Debe llenar todos los campos");
      return;
    }

    let montoNumerico = parseFloat(monto);

    let resultado = transferirSaldo(cuenta, destinatario, montoNumerico);

    if (resultado === "montoInvalido") {
      Alert.alert("Ingrese un monto válido");
      return;
    }

    if (resultado === "sinSaldo") {
      Alert.alert("No cuenta con el saldo para completar la transacción");
      return;
    }

    Alert.alert("Transferencia exitosa");

    setCuenta("");
    setDestinatario("");
    setMonto("");
  }

  return (
    <View>
      <Text>Pantalla Transferencias</Text>

      <Text>Saldo Actual: L.{saldo}</Text>

      <Text>Número de cuenta</Text>
      <TextInput
        placeholder="Ingrese número de cuenta"
        value={cuenta}
        onChangeText={setCuenta}
        keyboardType="numeric"
      />

      <Text>Nombre del destinatario</Text>
      <TextInput
        placeholder="Ingrese nombre"
        value={destinatario}
        onChangeText={setDestinatario}
      />

      <Text>Monto a transferir</Text>
      <TextInput
        placeholder="Ingrese monto"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
      />

      <Button title="Transferir Saldo" onPress={transferir} />
    </View>
  );
}