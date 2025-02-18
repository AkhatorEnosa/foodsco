/* eslint-disable react/prop-types */

import { icons } from "../../constants"

const Socials = () => {
  return (
    <div className="w-fit flex gap-2 justify-center items-center">
        <img src={icons.pinterest} alt="pinterest" className="size-10 p-2 rounded-full border-[1px] border-black"/>
        <img src={icons.instagram} alt="instagram" className="size-10 p-2 rounded-full border-[1px] border-black"/>
        <img src={icons.facebook} alt="facebook" className="size-10 p-2 rounded-full border-[1px] border-black"/>
    </div>
  )
}

export default Socials