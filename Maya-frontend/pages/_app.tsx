import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='font-Bebas tracking-widest'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
