/* eslint-disable react/prop-types */

import { icons } from "../../constants"

const FeaturedCard = ({ image, rating, title, desc, price }) => {
  return (
    <div className="featured">
        <div className="featured-img">
            <img src={image} alt=""/>
        </div>

        <div className="featured-rating">
            <img src={icons.star} alt="" />
            <p>{rating}</p>
        </div>

        <div className="featured-content">
            <div className="featured-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className="featured-footer">
                <p>{price}</p>
                <span><img src={icons.plus} alt="" /></span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard