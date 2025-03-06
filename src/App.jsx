import React from "react"
import Hero from "./pages/Hero"
import About from "./pages/About"
import { Stack } from "./pages/Stack"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import ProjectsSection from "./pages/ProjectsSection"
import CustomCursor from "./pages/CustomCursor"
import Chatbot from "./pages/Chatbot"

function App() {


  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <Chatbot />
      <Stack />
      <Footer />
    </>
  )
}

export default App
