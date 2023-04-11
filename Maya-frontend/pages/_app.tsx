import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='font-Bebas tracking-widest'>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Component
        {...pageProps}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Footer />
    </div>
  );
}
