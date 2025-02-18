/* eslint-disable react/prop-types */

const Button = ({ title, type }) => {
  return (
    <button className={type == "transparent" ? "button-transparent" : "button-opaque"}>{title}</button>
  )
}

export default Button