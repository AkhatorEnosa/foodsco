import { icons } from "../../constants"

const Navbar = () => {
  return (
    <nav className="px-[100px]">
        <h1>Foodsco</h1>
        <ul>
            <li className="text-[#FD5200] underline">Home</li>
            <li>About</li>
            <li>Featured</li>
            <li>Menu</li>
        </ul>
        <div className="icons">
            <img src={icons.search} alt="" />
            <img src={icons.profile} alt="" />
            <img src={icons.basket} alt="" />
        </div>
    </nav>
  )
}

export default Navbar