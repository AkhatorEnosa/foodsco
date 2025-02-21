import { DRINKS, images, MEALS } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import Menu from "../components/Menu"

const Explore = () => {
  return (
    <section className="section-wrapper py-12">
        <div className="section-header">
            <h1 className="section-heading">Explore Our Menu</h1>
            <p>Our culinary creations come to life.</p>
        </div>

        <div className="relative w-full flex justify-between items-end mt-14 mb-10">
            <BackgroundCircles number={3} variant={"top-20 rotate-12 gap-40"}/>

            <Menu heading={"Meals"} type={MEALS}/>

            <div className="chef absolute w-full flex justify-center">
                <div className="w-fit h-[459px] rounded-t-[217.17px] flex justify-center z-10 overflow-clip">
                    <img src={images.chef} alt="" />
                </div>
                <div className="absolute w-[330px] h-14 bg-white z-20 blur-md -bottom-8"></div>
            </div>
            
            <Menu heading={"Drinks"} type={DRINKS}/>
        </div>

        <Button title={"See more"}/>
    </section>
  )
}

export default Explore