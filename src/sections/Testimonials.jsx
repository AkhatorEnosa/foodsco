import { TESTIMONIES } from "../../constants"
import BackgroundCircles from "../components/BackgroundCircles"
import Button from "../components/Button"
import TestimonialCard from "../components/TestimonialCard"

const Testimonials = () => {
  return (
    <section className="section-wrapper">
        <div className="section-header">
            <h1 className="section-heading">Testimonials</h1>
            <p>What our customers are saying</p>
        </div>

        <div className="relative flex flex-col gap-6 mt-14">
            <BackgroundCircles number={2} variant={"top-96 lg:top-56 left-0 -rotate-[40deg] gap-64"}/>
            <BackgroundCircles number={1} variant={"bottom-0 right-0"}/>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

            <div className="grid lg:grid-cols-2 gap-5">
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

        <div className="banner relative my-10 lg:my-28 w-full text-center bg-[url(/backdrop.png)] bg-no-repeat bg-cover py-10 px-5 lg:py-40 rounded-3xl gap-6 overflow-clip">
            <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10"/>
            <div className="relative w-full flex flex-col gap-6 items-center z-30">
                <h2>Savor the Flavor of Home, Every Time You Eat</h2>
                <Button title={"See more"}/>
            </div>
        </div>
    </section>
  )
}

export default Testimonials