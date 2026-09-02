import { useState } from "react";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import Proof from "./components/Proof";
import Studio from "./components/Studio";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import { tickerItems } from "./data";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <Preloader onGone={() => setBooted(true)} />}
      <div className="noise-overlay" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker items={tickerItems} duration={34} />
        <Work />
        <Services />
        <Process />
        <Proof />
        <Studio />
        <Faq />
        <Ticker
          items={["Let's talk", "Breathe easy", "Ship calm", "No drama", "From day one"]}
          reverse
          duration={26}
        />
        <Contact />
      </main>
    </>
  );
}
