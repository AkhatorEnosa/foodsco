import { useState } from "react"
import { FEATUREDMEALS, icons } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import FeaturedCard from "../components/FeaturedCard"
import FeatureArrowButton from "../components/FeatureArrowButton"

const Features = () => {
  const [currIndex, setCurrIndex] = useState(0)

  const selectNext = () => {
    const isLastTile = currIndex === FEATUREDMEALS.length - 1;
    const newIndex = isLastTile ? 0 : currIndex + 1
    setCurrIndex(newIndex)
  }

  const selectPrev = () => {
    const isFirstTile = currIndex === 0;
    const newIndex = isFirstTile ? FEATUREDMEALS.length - 1 : currIndex - 1
    setCurrIndex(newIndex)
  }

  return (
    <section className="section-wrapper" id="featured">
        <div className="section-header">
            <h1 className="section-heading">Our Featured dishes</h1>
            <p className="">Our culinary creations come to life.</p>
        </div>

        <div className="relative w-full flex flex-col md:flex-row gap-10 md:gap-2 lg:gap-10 px-20 lg:px-0 mt-20 lg:mt-36 justify-center items-center mb-14 over">
            <BackgroundCircles number={2} variant={"flex gap-40"}/>
            <FeatureArrowButton 
              iconSrc={icons.left}
              action={() => selectPrev()}
            />

                {FEATUREDMEALS.map((featured, index) => (
                  <FeaturedCard 
                    key={index}
                    image={featured.imgSrc}
                    title={featured.title}
                    desc={featured.desc}
                    rating={featured.rating}
                    price={featured.price}
                    active={currIndex === index}
                  />
                ))}

            <FeatureArrowButton 
              iconSrc={icons.right}
              action={() => selectNext()}
            />
        </div>

        <Button title="See More"/>

    </section>
  )
}

export default Features