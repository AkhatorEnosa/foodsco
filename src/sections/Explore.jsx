import { DRINKS, images, MEALS } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import Menu from "../components/Menu"

const Explore = () => {
  return (
    <section className="section-wrapper py-12" id="menu">
        <div className="section-header">
            <h1 className="section-heading">Explore Our Menu</h1>
            <p>Our culinary creations come to life.</p>
        </div>

        <div className="relative w-full flex flex-col md:flex-row gap-10 justify-center items-center lg:justify-between lg:items-end mt-14 mb-10">
            <BackgroundCircles number={3} variant={"top-20 rotate-12 gap-40"}/>

            <Menu heading={"Meals"} type={MEALS}/>

            <div className="chef hidden absolute w-full lg:flex justify-center">
                <div className="relative bg-[#110e09] w-[300px] h-[429px] rounded-t-[217.17px] flex justify-center items-end z-10 overflow-clip">
                    <img src={images.chef} alt="" className="h-[95%]"/>
                </div>
                <div className="absolute w-[500px] h-20 bg-white z-20 blur-md -bottom-10"></div>
            </div>
            
            <Menu heading={"Drinks"} type={DRINKS}/>
        </div>

        <Button title={"See more"}/>
    </section>
  )
}

export default Explore