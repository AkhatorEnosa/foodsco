/* eslint-disable react/prop-types */

import { useRef } from "react";
import { icons } from "../../constants"
// import { OPTIONS } from "../../constants/images"

const Carousel = ({ images, currIndex, setCurrIndex }) => {
  const itemsRef = useRef(null)
  
  const backwardSlide = () => {
    const isFirstTile = currIndex === 0;
    const newIndex = isFirstTile ? images.length - 1 : currIndex - 1;
    setCurrIndex(newIndex)
  }

  const forwardSlide = () => {
    const isLastTile = currIndex === images.length - 1;
    const newIndex = isLastTile ? 0 : currIndex + 1;
    setCurrIndex(newIndex);

      // if(itemsRef.current !== null) {
      //       itemsRef.current.scrollLeft = itemsRef.current.scrollWidth;
      //   }
  }

  return (
    <div className="w-full md:w-[50%] lg:w-[524px] flex lg:justify-center items-center gap-2 lg:gap-6 bg-[#FD5200]/20 p-2 h-[130px] lg:h-[170px] lg:mt-[137px] rounded-[20px]">
        <div className="arrows" onClick={() => backwardSlide()}>
            <img src={icons.leftArrow} alt="" />
        </div>

        <div ref={itemsRef} className="flex justify-center items-center w-full px-4 gap-2 z-20">
          {images.map((url, index) => (
              <img key={index+url} src={url} alt="" className={`bg-black rounded-[20px] border-2 ${currIndex == index ? "size-24 lg:size-[130px] primary-border-color duration-150 transition-all" : "size-16 lg:size-[100px]"}`}/>
          ))}
        </div>


        <div className="arrows">
            <img src={icons.rightArrow} alt="" onClick={() => forwardSlide()}/>
        </div>
    </div>
  )
}

export default Carousel