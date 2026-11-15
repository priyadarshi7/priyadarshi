import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { About, Skills, Achievements, CodingProfiles, Contact } from "./components/Lists";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        {/* <About /> */}
        <Skills />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
