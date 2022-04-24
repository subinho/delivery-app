import React from 'react'
import './Button.css'

const Button = ({ classBtn, type, text}) => {
  return (
    <>
      <button type={type} className={classBtn}>{text}</button>
    </>
  )
}

export default Button