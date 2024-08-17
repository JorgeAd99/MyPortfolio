import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jado.Dev",
  description: "Desarrollado por Jado.Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <NavBar/>
        <Header />
        {children}

      </body>
    </html>
  );
}
