"use client"
import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button className="rounded-lg border-2 font-bold shadow-md w-[100px] text-2xl text-[#c34a36] border-[#fff]" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button
