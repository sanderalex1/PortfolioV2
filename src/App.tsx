import { Box, Container, Divider } from "@mui/material";
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
        <Box id="hero">
          <HeroSection />
        </Box>
        <Divider />
        <Box id="projects">
          <ProjectsSection />
        </Box>
        <Divider />
        <Box id="skills">
          <SkillsSection />
        </Box>
        <Divider />
        <Box id="about">
          <AboutSection />
        </Box>
        <Divider />
        <Box id="contact">
          <ContactSection />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
