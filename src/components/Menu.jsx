/* eslint-disable react/prop-types */

import MenuItem from "./MenuItem"

const Menu = ({ heading, type }) => {
  return (
    <div className="menu">
        <h3>{heading}</h3>
        <div>
            {
                type.map(item => (
                    <MenuItem 
                        key={item.title}
                        title={item.title}
                        itemImg={item.src}
                        rating={item.rating}
                        price={item.price}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Menu