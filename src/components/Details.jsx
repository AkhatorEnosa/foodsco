/* eslint-disable react/prop-types */

const Details = ({ items, heading, title }) => {
  return ( 
    <div className="details">
        <span className="w-fit flex -space-x-6 overflow-hidden">
            {items.map((url) => (
                // <p key={url}>{url}</p>
                <img src={url} key={url} alt="person" className="inline-block w-[37.71px] h-[37.71px] rounded-full"/>
                ))
            }
        </span>
        <div>
            <h2 className="details-heading">{heading}</h2>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Details