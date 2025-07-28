"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/app/(screen)/banner/page";
import Intro from "@/app/(screen)/intro/page";

export default function Home(){
  useEffect(() => {
  }, []);

  return (
      <> 
        <Header />
        <main id="main" role="main">
          <Banner />
          <Intro />
        </main>
        <Footer />
      </>
  )
}