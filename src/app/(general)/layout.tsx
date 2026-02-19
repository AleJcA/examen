'use client'

import Navbar from "../componets/NavBar";
import ProviderGasto from "../providers/ProviderGasto";

export default function NameLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      <div className="bg-gradient-to-br from-black via-zinc-900 to-gray-950 min-h-screen">
        <main className="pt-24">

          <ProviderGasto>
            <Navbar></Navbar>
            {children}
          </ProviderGasto>

        </main>
      </div>



    </div>
  );
}