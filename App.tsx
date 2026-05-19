import React from "react";
import Navegacion from "./components/Navegacion";
import ProviderBanco from "./providers/ProviderBanco";

export default function App() {
  return (
    <ProviderBanco>
      <Navegacion />
    </ProviderBanco>
  );
}