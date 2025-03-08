/* eslint-disable react/prop-types */

const FeatureArrowButton = ({ angle, action }) => {
  return (
    <span className="min-h-[47px] min-w-[47px] primary-bg-color rounded-full items-center justify-center size-12 hidden lg:flex cursor-pointer hover:shadow-md"
    onClick={action}
  >
    {/* <img src={iconSrc} alt="right-arrow" /> */}
    <i className={`bi bi-chevron-${angle} text-2xl text-white`}></i>
  </span>
  )
}

export default FeatureArrowButton