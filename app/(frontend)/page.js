import Greetings from "../../src/modules/beranda/Greetings.js";
import About from "../../src/modules/beranda/About.js";
import More from "../../src/modules/beranda/More.js";
import Connect from "../../src/modules/beranda/Connect.js";
import { NavbarResolver } from "../../src/component/Layout/NavbarResolver";

export default function Home() {
  return (
    <>
      <NavbarResolver />
      <Greetings />
      <About />
      <More />
      <Connect />
    </>
  );
}
