import { TESTIMONIES } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import TestimonialCard from "../components/TestimonialCard"

const Testimonials = () => {
  return (
    <div className="section-wrapper">
        <div className="section-header">
            <h1 className="section-heading">Testimonials</h1>
            <p>What our customers are saying</p>
        </div>

        <div className="relative flex flex-col gap-6 mt-14">
            <BackgroundCircles number={2} variant={"top-56 left-0 -rotate-[40deg] gap-64"}/>
            <BackgroundCircles number={1} variant={"bottom-0 right-0"}/>

            <div className="grid grid-cols-3 gap-5">
            {TESTIMONIES.slice(0,3).map((item, index) => (
                    <TestimonialCard 
                        key={index+item.title}
                        text={item.text}
                        image={item.src}
                        title={item.title}
                        name={item.name}
                        variant={"right-7 -bottom-4"}
                    />
            ))}
            </div>

            <div className="grid grid-cols-2 gap-5">
            {TESTIMONIES.slice(3).map((item, index) => (
                    <TestimonialCard 
                        key={index+item.title}
                        text={item.text}
                        image={item.src}
                        title={item.title}
                        name={item.name}
                        variant={"right-7 -bottom-4"}
                    />
            ))}
            </div>
        </div>

        <div className="banner relative my-28 w-full text-center bg-[url(/backdrop.png)] bg-no-repeat bg-cover py-40 rounded-3xl gap-6 overflow-clip">
            <div className="bg-black/70 w-full h-full absolute top-0 z-10"/>
            <div className="w-full h-full flex flex-col items-center bg-red-600 z-30">
                <h2>Savor the Flavor of Home, Every Time You Eat</h2>
                <Button title={"See more"}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials