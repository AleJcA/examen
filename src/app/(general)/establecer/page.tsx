"use client"
import { useRouter } from "next/navigation";
export default function page() {

    const router= useRouter()

  function IrAgastos(){

    router.push('/gastos')


  }


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-gray-950 px-4">
      
      <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:scale-[1.01]">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-8 tracking-tight">
          Establecer Presupuesto
        </h1>

        <form action="" className="space-y-6">
          

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              presupuesto
            </label>
            <input
              type="number"
              
              placeholder="Ingresa tu presupuesto mensual"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
              required
            />
          </div>

          <button
            type="button"
            onClick={IrAgastos}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
          >
            Guardar presupuesto
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          
        </p>
      </div>
    </div>
  )
}
