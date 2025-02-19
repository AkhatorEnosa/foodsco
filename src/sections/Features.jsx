/* eslint-disable react/prop-types */

import FeaturedCard from "../components/FeaturedCard"

const Features = () => {
  return (
    <section className="features-wrapper w-full px-[100px] flex flex-col items-center">
        <div className="features-heading w-full text-center">
            <h1 className="section-heading">Our Featured dishes</h1>
            <p className="">Our culinary creations come to life.</p>
        </div>

        <div>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
        </div>
    </section>
  )
}

export default Features