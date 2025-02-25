import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Explore from "./sections/Explore"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const App = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <main>
      {theme}
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Explore />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App