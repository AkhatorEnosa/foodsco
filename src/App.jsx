import Navbar from "./components/Navbar"
import About from "./sections/About"
import Explore from "./sections/Explore"
import Features from "./sections/Features"
import Hero from "./sections/Hero"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Explore />
    </main>
  )
}

export default App