/* eslint-disable react/prop-types */

const BackgroundCircles = ({ number, variant}) => {

    const displayCirclesByNumber = () => {
        let element = [];
        for (let index = 0; index < number; index++) {
            // const randomPosNum = Math.floor(Math.random() * 6) + 1
            
            element.push(<div className="size-64 primary-bg-color z-50 rounded-full opacity-25 blur-[150px]"></div>)
        }
        return element
    }

  return (
    <div className={`absolute ${variant} flex w-fit gap-40 justify-center items-center z-10`}>
        {displayCirclesByNumber().map((item) => (
          item
        ))}
    </div>
  )
}

export default BackgroundCircles