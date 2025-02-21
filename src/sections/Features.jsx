import { icons } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import FeaturedCard from "../components/FeaturedCard"

const Features = () => {
  return (
    <section className="section-wrapper">
        <div className="section-header">
            <h1 className="section-heading">Our Featured dishes</h1>
            <p className="">Our culinary creations come to life.</p>
        </div>

        <div className="w-full flex gap-10 mt-36 justify-center items-center mb-14">
            <BackgroundCircles number={2} variant={"gap-40"}/>
            <span className="p-[9.4px] bg-[#FD5200] rounded-full flex items-center justify-center size-12"><img src={icons.left} alt="" /></span>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            <span className="p-[9.4px] bg-[#FD5200] rounded-full flex items-center justify-center size-12"><img src={icons.right} alt="" /></span>
        </div>

        <Button title="See More"/>

    </section>
  )
}

export default Features