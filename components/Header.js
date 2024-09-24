import React from 'react'
import { FaHeart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#fbeaff] flex justify-center text-2xl font-bold font-serif text-[#c34a36] border-[#c34a36] border-b rounded-br-xl fixed right-0 left-0 top-0 z-30">
      <FaHeart className="mt-1 mr-1" />
      <h1>A Message For You</h1>
      <FaHeart className="mt-1 ml-1" />
    </header>
  );
}

export default Header
