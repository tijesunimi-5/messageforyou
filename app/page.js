"use client"
import Button from "@/components/Button";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[500px] overflow-hidden bg-[#fbeaff] h-[180vh]">
      <h1 className="uppercase text-2xl font-extrabold text-center mt-36 flex justify-center text-[#c34a36]">
        A message for you <FaHeart className="ml-1 mt-1 text-red-500" />
      </h1>
      <form className="mt-20 w-[500px] text-center flex flex-col justify-center  ">
        <div className="border border-[#ffff] w-[420px] flex flex-col justify-center text-center ml-10 rounded-lg shadow-2xl">
          <h1 className="text-5xl font-bold underline mt-5 text-[#c34a36]">
            Sign Up{" "}
          </h1>
          <div className="relative mt-10">
            <label
              htmlFor="name"
              className="absolute pl-4 pt-1 text-2xl text-[#c34a36]"
            >
              Name:
            </label>
            <input
              type="name"
              id="name"
              className="border border-white shadow-md w-[350px] h-8 rounded-2xl pl-[90px] pt-2 text-xl"
              required
            />
          </div>

          <div className="relative mt-5">
            <label
              htmlFor="email"
              className="absolute pl-4 pt-1 text-2xl text-[#c34a36]"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-white shadow-md w-[320px] h-8 rounded-2xl pl-[90px] pt-2 text-xl"
              required
            />
          </div>

          <div className="mt-4">
            <Button>Sign Up</Button>
          </div>

          <p className="mt-5 text-2xl text-[#ff9671]">
            Already signed up?{" "}
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </p>

          <div className="flex mt-2 justify-between w-[300px] text-[#ff9671]  text-2xl ml-[58px]">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <p className="font-mono font-medium text-xl text-orange-500 underline">
            Follow us{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
