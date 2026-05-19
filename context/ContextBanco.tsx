import { createContext } from "react";
import { Transaccion } from "../modelos/Transaccion";

export const contextBanco = createContext({
  saldo: 10000,
  listaTransacciones: [] as Transaccion[],
  depositarSaldo: () => {},
  retirarSaldo: (): string => "",
  transferirSaldo: ( cuenta: string, destinatario: string, monto: number ): string => "",
});