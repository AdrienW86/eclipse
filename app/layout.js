import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Zone from "@/components/Zone/Zone";
import ConditionalForm from "@/components/ConditionalForm";
import Footer from "@/components/Footer/Footer";
import Call from "@/components/Call/Call";
import "./globals.css";

export const metadata = {
  title: "Eclipse",
  description: "Votre couvreur professionnel sur Perpignan et les environs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <Menu />
        {children}
        <Zone />
        <ConditionalForm /> {/* 👈 magique */}
        <Footer />
        <Call />
      </body>
    </html>
  );
}
