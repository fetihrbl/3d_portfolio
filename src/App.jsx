import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import Experience from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowecaseSection";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoSection />
      <FeatureCards />
      <Experience />
    </>
  )
};

export default App;
