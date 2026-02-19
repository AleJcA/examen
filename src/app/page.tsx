'use client'
import { useState } from "react";
import { useUsuarioContext } from "./providers/ProviderUsuario";
import { useRouter } from "next/navigation";

export default function Home() {

  const [usuario, setUsuario]=useState<string>('');
  const [contrasena, setContrasena]= useState<string>('');

  const {setNombreUsuario}=useUsuarioContext();

  const router= useRouter()

  function iniciarSesion(){
    if(usuario==='' || contrasena==='')
        return alert('Ingrese credenciales')

    if(contrasena==='admin123' && usuario ==='admin') {
        setNombreUsuario(usuario);
        router.push('/establecer')
    } else {
        alert('Credenciales incorrectas')
    }
  }


  return (


    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-gray-950 px-4">
      
      <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:scale-[1.01]">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-8 tracking-tight">
          Bienvenido
        </h1>

        <form action="" className="space-y-6">
          

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
              required
            />
          </div>

 
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
              required
            />
          </div>


          <button
            type="button"
            onClick={iniciarSesion}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          
        </p>
      </div>
    </div>



  );
}