import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eclipse Couverture",
  description: "Votre couvreur professionnel sur Perpignan et les environs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
