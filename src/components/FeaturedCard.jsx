/* eslint-disable react/prop-types */

import { icons } from "../../constants"

const FeaturedCard = ({ image, rating, title, desc, price, active }) => {
  return (
    <div className={`featured ${active ? "lg:rounded-[29.6px] shadow-[#0000001A]" : "lg:rounded-3xl shadow-[#0000000D]"}`}>
        <div className={`featured-img ${active ? "rotate-0 lg:scale-125 duration-150 transition-all" : "-rotate-45 scale-100 duration-150 transition-all"}`}>
            <img src={image} alt={`featured-img`}/>
        </div>

        <div className={`featured-rating`}>
            <img src={icons.star} alt="icon"  className={`${!active ? "lg:size-[22px]" : "lg:size-[25.85px]"}`}/>
            <p className={`${active ? "text-sm" : "text-xs"}`}>{rating}</p>
        </div>

        <div className={`featured-content`}>
            <div className={`featured-desc`}>
                <h3 className={active ? "text-lg lg:text-2xl" : "text-lg lg:text-xl"}>{title}</h3>
                <p className={`${active ? "lg:text-xl leading-7" : "lg:text-lg leading-[19.8px]"}`}>{desc}</p>
            </div>
            <div className={`featured-footer ${active ? "text-2xl lg:text-[28px]" : "text-2xl lg:text-2xl"}`}>
                <p>{price}</p>
                <span className={`${active ? "p-[9.4px]" : "p-2"}`}><img src={icons.plus} alt="" /></span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard