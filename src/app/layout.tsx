import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "XY Web Services",
  description: "Le Web pas cher et efficace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
