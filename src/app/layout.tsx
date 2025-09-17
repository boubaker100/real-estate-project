import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],     
  weight: ["400", "500", "700"],  
  display: "swap",
  variable: "--font-poppins",    
});


export const metadata: Metadata = {
  title: "real estate",
  description:
    "The best platform to sell, rent, and buy real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
