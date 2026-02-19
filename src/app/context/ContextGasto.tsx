import { createContext } from "react"
import { Gasto } from "../models/Gasto";

export const ContextGasto= createContext({
    gastos: [] as Gasto[],
    obtenerGastos: () => {}
})