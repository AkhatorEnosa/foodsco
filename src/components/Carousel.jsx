/* eslint-disable react/prop-types */

import { icons } from "../../constants"
// import { OPTIONS } from "../../constants/images"

const Carousel = ({ images, currIndex, setCurrIndex }) => {

  
  const backwardSlide = () => {
    const isFirstTile = currIndex === 0;
    const newIndex = isFirstTile ? images.length - 1 : currIndex - 1;
    setCurrIndex(newIndex)
  }

  const forwardSlide = () => {
    const isLastTile = currIndex === images.length - 1;
    const newIndex = isLastTile ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  }

  return (
    <div className="w-full lg:w-[524px] flex lg:justify-center items-center gap-2 lg:gap-6 bg-[#FD5200]/20 p-2 h-[170px] mt-[137px] rounded-[20px]">
        <div className="arrows" onClick={() => backwardSlide()}>
            <img src={icons.leftArrow} alt="" />
        </div>

        <div className="flex justify-center items-center w-full overflow-x-scroll gap-2 z-20">
          {images.map((url, index) => (
              <img key={index+url} src={url} alt="" className={`bg-black rounded-[20px] border-2 ${currIndex == index ? "size-[130px] primary-border-color duration-150 transition-all" : "size-[100px]"}`}/>
          ))}
        </div>


        <div className="arrows">
            <img src={icons.rightArrow} alt="" onClick={() => forwardSlide()}/>
        </div>
    </div>
  )
}

export default Carousel