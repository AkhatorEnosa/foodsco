import Navbar from "./components/Navbar"
import About from "./sections/About"
import Explore from "./sections/Explore"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      <Features />
      <Explore />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App