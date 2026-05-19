import React, { useContext, useState } from "react";
import { contextBanco } from "../context/ContextBanco";
import { Vista } from "../modelos/Vista";
import { Transaccion } from "../modelos/Transaccion";

export default function ProviderBanco(props: Vista) {
  
  const [saldo, setSaldo] = useState(10000);

  const [listaTransacciones, setListaTransacciones] = useState<Transaccion[]>([
    {
      id: 1,
      descripcion: "Saldo inicial",
      monto: 10000,
      tipo: "Inicio",
    },
  ]);

  function depositarSaldo() {
    let nuevaTransaccion: Transaccion = {
      id: listaTransacciones.length + 1,
      descripcion: "Depósito de L.500",
      monto: 500,
      tipo: "Depósito",
    };

    setSaldo(saldo + 500);
    setListaTransacciones([...listaTransacciones, nuevaTransaccion]);
  }

  function retirarSaldo() {
    if (saldo < 200) {
      return "sinSaldo";
    }

    let nuevaTransaccion: Transaccion = {
      id: listaTransacciones.length + 1,
      descripcion: "Retiro de L.200",
      monto: 200,
      tipo: "Retiro",
    };

    setSaldo(saldo - 200);
    setListaTransacciones([...listaTransacciones, nuevaTransaccion]);

    return "exitoso";
  }

  function transferirSaldo(cuenta: string, destinatario: string, monto: number) {
    if (monto <= 0 || isNaN(monto)) {
      return "montoInvalido";
    }

    if (monto > saldo) {
      return "sinSaldo";
    }

    let nuevaTransaccion: Transaccion = {
      id: listaTransacciones.length + 1,
      descripcion: "Transferencia a " + destinatario + " cuenta " + cuenta,
      monto: monto,
      tipo: "Transferencia",
    };

    setSaldo(saldo - monto);
    setListaTransacciones([...listaTransacciones, nuevaTransaccion]);

    return "exitosa";
  }

  return (
    <contextBanco.Provider
      value={{ saldo, listaTransacciones, depositarSaldo, retirarSaldo, transferirSaldo,}}>
      {props.children}
    </contextBanco.Provider>
  );
}

export function useContextBanco() {
  return useContext(contextBanco);
}