"use client";
// app/message/[name]/page.js
import { useParams } from "next/navigation";
import { getMessageByName } from "@/data/user"; // Your function to get the message
import React from "react";
import Header from "@/components/Header";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaThumbsDown,
  FaThumbsUp,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function MessagePage() {
  const { name } = useParams(); // Fetch the dynamic route parameter

  const message = getMessageByName(name); // Get message by name

  if (!message) {
    return <p>No message found for {name}</p>; // Handle if no message exists
  }
  const reactLove = () => {
    const love = document.querySelector('.love')
    const dislike = document.querySelector(".dislike");
    const like = document.querySelector(".like");
    

    love.style.color = "#c34a36";
    dislike.style.color = 'white'
    like.style.color = 'white'
  }
  const reactLike = () => {
    const love = document.querySelector('.love');
    const like = document.querySelector(".like");
    const dislike = document.querySelector(".dislike");

    like.style.color = "#c34a36";
    love.style.color = 'white'
    dislike.style.color = 'white'
  }

  const reactDislike = () => {
    const dislike = document.querySelector(".dislike");
    const like = document.querySelector(".like");
    const love = document.querySelector('.love')

    dislike.style.color = "#c34a36";
    love.style.color = "white";
    like.style.color = "white";
  }

  return (
    <div className="bg-[#fbeaff] h-[120vh]">
      <Header />
      <div className="pt-48">
        <div className=" w-[350px] bg-[#c4fcef] flex flex-col justify-center text-center ml-3 h-[350px] rounded-xl shadow-2xl ">
          <h1 className="text-2xl font-bold font-serif">Dear, {name}</h1>
          <p className="text-xl font-sans font-medium">{message}</p>

          <div className="flex text-white text-2xl justify-between text-center pt-20 w-[200px] ml-20">
            <FaHeart className="love" onClick={reactLove}/>
            <FaThumbsUp className="like" onClick={reactLike} />
            <FaThumbsDown className="dislike" onClick={reactDislike} />
          </div>
        </div>
      </div>

      <div className="flex mt-[45px] justify-between w-[300px] text-[#ff9671]  text-2xl ml-[35px]">
        <a
          href="https://www.facebook.com/profile.php?id=61552213471642"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://https://www.instagram.com/reel/C_RRECgtpB8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <FaWhatsapp />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
