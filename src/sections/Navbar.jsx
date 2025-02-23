import { useState } from "react"
import { icons } from "../../constants"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav>
        <div className="large-screen-menu">
          <h1>Foodsco</h1>
          
          <ul>
              <li className="primary-text-color underline">Home</li>
              <li>About</li>
              <li>Featured</li>
              <li>Menu</li>
          </ul>

          <div className="icons">
              <img src={icons.search} alt="" />
              <img src={icons.profile} alt="" />
              <img src={icons.basket} alt="" />
          </div>
        </div>

        <div className="mobile-screen-menu">
          <div className="w-full flex justify-between items-center ">
            <h1>Foodsco</h1>
            <i className={`bi bi-${menu ? "x" : "list"} text-4xl primary-text-color font-bold transition-all duration-150`} onClick={() => setMenu(!menu)}></i>
          </div>
          
          <div className={`mobile-screen-menu-items ${!menu ? "hidden" : "h-screen"}`}>
            <ul>
                <li className="primary-text-color">Home</li>
                <li>About</li>
                <li>Featured</li>
                <li>Menu</li>
            </ul>
            <div className="mobile-screen-menu-icons">
                <img src={icons.search} alt="" />
                <img src={icons.profile} alt="" />
                <img src={icons.basket} alt="" />
            </div>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar