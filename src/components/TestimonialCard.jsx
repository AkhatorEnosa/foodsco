/* eslint-disable react/prop-types */

import { icons } from "../../constants"


const TestimonialCard = ({ text, name, image, title, variant }) => {
  return (
    <div className="flex flex-col border-[1px] border-[#E3EBF6] rounded-3xl bg-white p-6 justify-between gap-10 z-20">
        <div className="relative flex gap-1 leading-[27px]">
            <img src={icons.quoteLeft} alt="quoteleft" className="h-fit w-fit"/>
            <p>{text}</p>
            <img src={icons.quoteRight} alt="quoteright" className={`h-fit w-fit absolute ${variant}`} />
        </div>

        <div className="flex flex-col gap-[33px]">
            <div className="border-t-[1px] border-[#E3EBF6]"/>

            <div className="flex gap-6 items-center">
                <div className="w-fit h-fit rounded-full overflow-clip">
                    <img src={image} alt="person-img" />
                </div>
                <div>
                    <h3 className="person-name font-medium text-2xl">{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TestimonialCard