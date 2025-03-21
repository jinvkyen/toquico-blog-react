import React from "react";
import { MarqueeA } from "../components/with-motion/MarqueeA"
import { Navbar } from "@/components/with-motion/Navbar";
import Contents from "./home/Contents";

function HomePage() {
  return (
    <div className='min-h-screen bg-transparent font-satoshi'>
      {/* Marquee */}
        <MarqueeA/>
      <section className='container mx-auto mb-12'>
        <Navbar />
        <Contents/>
      </section>
    </div>
  );
}

export default HomePage;
