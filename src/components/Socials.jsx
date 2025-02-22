/* eslint-disable react/prop-types */

import { icons } from "../../constants"

const Socials = ({ variant, type }) => {
  if(type == 'white') {
    return (
      <div className="w-fit flex gap-2 justify-center items-center">
          <img src={icons.pinterestw} alt="pinterest" className={variant}/>
          <img src={icons.instagramw} alt="instagram" className={variant}/>
          <img src={icons.facebookw} alt="facebook" className={variant}/>
      </div>
    )
  } else {
    return (
      <div className="w-fit flex gap-2 justify-center items-center">
          <img src={icons.pinterest} alt="pinterest" className={variant}/>
          <img src={icons.instagram} alt="instagram" className={variant}/>
          <img src={icons.facebook} alt="facebook" className={variant}/>
      </div>
    )
  }
}

export default Socials