import { FEATUREDMEALS, icons } from "../../constants"
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

        <div className="relative w-full flex flex-col lg:flex-row gap-10 mt-20 lg:mt-36 justify-center items-center mb-14 over">
            <BackgroundCircles number={2} variant={"flex gap-40"}/>
            <span className="p-[9.4px] bg-[#FD5200] rounded-full items-center justify-center size-12 hidden lg:flex"><img src={icons.left} alt="" /></span>
                {FEATUREDMEALS.map(featured => (
                  <FeaturedCard 
                    key={featured}
                    image={featured.imgSrc}
                    title={featured.title}
                    desc={featured.desc}
                    rating={featured.rating}
                    price={featured.price}
                  />
                ))}
            <span className="p-[9.4px] bg-[#FD5200] rounded-full items-center justify-center size-12 hidden lg:flex"><img src={icons.right} alt="" /></span>
        </div>

        <Button title="See More"/>

    </section>
  )
}

export default Features