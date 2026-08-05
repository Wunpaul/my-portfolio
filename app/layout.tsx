import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORT THE COMPONENTS (Is this line missing?)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnpaul Owino | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F2EB] bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] bg-fixed text-slate-900 antialiased`}>
        
        {/* The Navbar sits at the top */}
        <Navbar /> 
        
        {/* The "children" is where your page.js content (Hero, Work, Skills) goes */}
        <main>
          {children}
        </main>

        {/* 2. PLACE THE FOOTER HERE (Is this line missing?) */}
        <Footer />
        
      </body>
    </html>
  );
}