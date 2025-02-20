/* eslint-disable react/prop-types */

const MenuItem = ({ itemImg, title, price, rating}) => {
  return (
    <div className="menu-item">
        <div className="w-[310px] flex gap-4 items-center">
            <div className="h-fit w-fit min-w-[70px] min-h-[70px] shadow-md rounded-full overflow-clip">
                <img src={itemImg} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1 font-bold">
                    <h3 className="text-xl line-clamp-1">{title}</h3>
                    <h2 className="text-2xl">N{price}</h2>
                </div>
                <img src={rating} alt="" className="w-fit"/>
            </div>
        </div>
    </div>
  )
}

export default MenuItem