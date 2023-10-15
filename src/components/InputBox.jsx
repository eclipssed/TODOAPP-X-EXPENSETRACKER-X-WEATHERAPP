import React from 'react'

const InputBox = ({placeholder,required, onChange, value, width, type}) => {
  return (
    <div>
        <input
        className={`${width} p-2 my-4 border border-orange-500 rounded-full  dark:bg-gray-900 focus:outline-orange-500  dark:outline-none`}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputBox