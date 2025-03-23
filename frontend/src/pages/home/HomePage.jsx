import React from "react";
import { MarqueeA } from "../../components/with-motion/MarqueeA";
import Contents from "./Contents";

function HomePage() {
  return (
    <div className='min-h-screen bg-transparent font-satoshi'>
      {/* Marquee */}
      <MarqueeA />
      <section className='container mx-auto'>
        <Contents />
      </section>
    </div>
  );
}

export default HomePage;
