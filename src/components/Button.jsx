import React from 'react'

const Button = ({onClick,type, label, bgColor, width, txtColor, border}) => {
  return (
    <div>
      <button
      type={type}
        onClick={onClick}
        className={` ${width} ${bgColor} ${border}  ${txtColor} rounded-full px-4 py-2 font-semibold `}
      >
        {label}
      </button>
    </div>
  )
}

export default Button