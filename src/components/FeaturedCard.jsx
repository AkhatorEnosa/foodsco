/* eslint-disable react/prop-types */

import { icons, images } from "../../constants"

const FeaturedCard = () => {
  return (
    <div className="featured">
        <div className="featured-img">
            <img src={images.feature1} alt=""/>
        </div>

        <div className="featured-rating">
            <img src={icons.star} alt="" />
            <p>4.0</p>
        </div>

        <div className="featured-content">
            <div className="featured-desc">
                <h3>Grilled Steak</h3>
                <p>Made from the finest potatoes...</p>
            </div>
            <div className="featured-footer">
                <p>N3,500</p>
                <span><img src={icons.plus} alt="" /></span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard