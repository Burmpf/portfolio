import Footer from "./components/footer/page";
import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import About from "./components/about/page";
import Landing from "./components/landing/page";
import Header from "./components/header/page";


export default function Home() {
  return (
    <main>
      <Header />
      <Landing />

      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
