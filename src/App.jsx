import Navbar from "./components/Navbar"
import About from "./sections/About"
import Features from "./sections/Features"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App