/* eslint-disable react/prop-types */

import { icons } from "../../constants"
import { OPTIONS } from "../../constants/images"

const Carousel = () => {
  return (
    <div className="w-fit flex justify-center items-center gap-6 bg-[#FD5200]/20 p-5 mt-[137px] rounded-[20px]">
        <div className="w-fit h-fit p-2 rounded-full bg-white">
            <img src={icons.leftArrow} alt="" />
        </div>

        {OPTIONS.map((url) => (
            <img key={url} src={url} alt="" className="bg-black rounded-[20px] border-[1px] border-[#FD5200]"/>
        ))}

        <div className="w-fit h-fit p-2 rounded-full bg-white">
            <img src={icons.rightArrow} alt="" />
        </div>
    </div>
  )
}

export default Carousel