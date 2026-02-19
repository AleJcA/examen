'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProviderUsuario from "./providers/ProviderUsuario";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >

        <ProviderUsuario>
          {children}
        </ProviderUsuario>


      </body>
    </html>
  );
}
