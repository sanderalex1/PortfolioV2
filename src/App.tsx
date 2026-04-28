import { Container, Divider } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <HeroSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;
