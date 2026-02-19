'use client'
import { Gasto } from '@/app/models/Gasto';
import { useGasto } from '@/app/providers/ProviderGasto';
import React, { useEffect, useState } from 'react'

export default function page() {

    const [id, setId] = useState('')
    const [monto, setMonto] = useState<string>('')
    const [categoria, setCategoria] = useState<string>('')
    const [fecha, setFecha] = useState<string>('')
    const [accion, setAccion] = useState<number>(0);


    const { gastos, obtenerGastos } = useGasto();

    useEffect(() => {
        obtenerGastos();
    }, [])

    async function guardarGasto() {
        const gasto: Gasto = {
            idgasto: parseInt(id),
            monto: monto,
            categoria: categoria,
            fecha: new Date(fecha).toISOString()
        }

        if (accion === 0) {
            const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gasto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gasto)
            })
            const data = await respuesta.json()
            alert("gasto agregado correctamente")
        } else {
            const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gasto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gasto)
            })

            alert("gasto actualizado correctamente")
        }
        obtenerGastos();

    }



    async function eliminarGasto(id: number) {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}gasto/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        const data = await respuesta.json()
        alert("gasto eliminado correctamente")
        obtenerGastos();
        limpiarFormulario();
    }

    function setValues(gasto: Gasto) {
        setId(gasto.idgasto.toString())
        setMonto(gasto.monto.toString())
        setCategoria(gasto.categoria)
        setFecha(gasto.fecha)
        setAccion(1);
    }

    function limpiarFormulario() {
        setId('')
        setMonto('')
        setCategoria('')
        setFecha('')
        setAccion(0);
    }



    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-950 p-8 pt-28">

            <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8">
                    <h2 className="text-2xl text-white font-semibold mb-6">
                        Presupuesto Establecido
                    </h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Monto"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none transition"
                        />

                        <input
                            type="text"
                            placeholder="descripcion"

                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none transition"
                        />

                        <input
                            type="text"
                            name="categoria"
                            placeholder="Categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none transition"
                        />

                        <input
                            type="date"
                            name="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/10 focus:ring-2 focus:ring-white/30 focus:outline-none transition"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
                            onClick={guardarGasto}
                        >
                            Guardar gasto
                        </button>
                    </form>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 overflow-x-auto">
                    <h2 className="text-2xl text-white font-semibold mb-6">
                        Lista de gastos
                    </h2>

                    <table className="w-full text-left text-gray-300">
                        <thead>
                            <tr className="border-b border-white/10 text-gray-400 text-sm">
                                <th className="pb-3">Monto</th>
                                <th className="pb-3">Descripcion</th>
                                <th className="pb-3">Categoria</th>
                                <th className="pb-3">Fecha</th>
                                <th className="pb-3 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                gastos.map((item: Gasto) => (

                                    <tr
                                        key={item.idgasto}
                                        className="border-b border-white/5 hover:bg-white/5 transition"
                                    >
                                        <td className="py-3">{item.monto}</td>
                                        <td>Descripcion</td>
                                        <td>{item.categoria}</td>
                                        <td>{item.fecha}</td>
                                        <td className="flex gap-3 justify-center py-3">

                                            <button

                                                onClick={() => setValues(item)}
                                                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() => eliminarGasto(item.idgasto)}
                                                className="px-3 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 text-sm transition"
                                            >
                                                Eliminar
                                            </button>

                                        </td>
                                    </tr>



                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
