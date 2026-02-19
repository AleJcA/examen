'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Plantilla } from '../models/Plantilla'
import { Gasto } from '../models/Gasto'
import { ContextGasto } from '../context/ContextGasto';

export default function ProviderGasto(props: Plantilla) {

    const [gastos, setGastos] = useState<Gasto[]>([]);

    async function obtenerGastos() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gasto`)
        const data = await response.json()
        setGastos(data)
    }


    return (
        <ContextGasto.Provider value={{ gastos, obtenerGastos }}>
            {props.children}
        </ContextGasto.Provider>
    )
}
    
export function useGasto() {
    return useContext(ContextGasto)
}