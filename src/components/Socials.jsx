/* eslint-disable react/prop-types */

import { icons } from "../../constants"

const Socials = ({ variant }) => {
  return (
    <div className="w-fit flex gap-2 justify-center items-center">
        <img src={icons.pinterest} alt="pinterest" className={variant}/>
        <img src={icons.instagram} alt="instagram" className={variant}/>
        <img src={icons.facebook} alt="facebook" className={variant}/>
    </div>
  )
}

export default Socials