/* eslint-disable react/prop-types */

const MenuItem = ({ itemImg, title, price, rating}) => {
  return (
    <div className="menu-item">
        <div className="lg:w-[310px] flex gap-2 px-2 items-center">
            <div className="w-12 lg:h-fit lg:w-fit lg:min-w-[70px] lg:min-h-[70px] shadow-md rounded-full overflow-clip">
                <img src={itemImg} alt="food" className="w-full h-full scale-110"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 font-bold">
                    <h3 className="text-lg lg:text-xl line-clamp-1">{title}</h3>
                    <h2 className="text-xl lg:text-2xl">N{price}</h2>
                </div>
                <img src={rating} alt="" className="w-fit"/>
            </div>
        </div>
    </div>
  )
}

export default MenuItem