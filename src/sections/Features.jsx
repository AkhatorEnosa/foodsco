/* eslint-disable react/prop-types */

import { icons } from "../../constants"
import FeaturedCard from "../components/FeaturedCard"

const Features = () => {
  return (
    <section className="features-wrapper w-full px-[100px] flex flex-col items-center">
        <div className="features-heading w-full text-center">
            <h1 className="section-heading">Our Featured dishes</h1>
            <p className="">Our culinary creations come to life.</p>
        </div>

        <div className="w-full flex gap-10 mt-36 justify-center items-center">
            <span className="p-[9.4px] bg-[#FD5200] rounded-full flex items-center justify-center size-12"><img src={icons.left} alt="" /></span>
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            <span className="p-[9.4px] bg-[#FD5200] rounded-full flex items-center justify-center size-12"><img src={icons.right} alt="" /></span>
        </div>
    </section>
  )
}

export default Features