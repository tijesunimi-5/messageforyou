"use client";
import { getMessage, getUsername } from "@/data/user";
import React from "react";

const page = () => {
  const userName = getUsername();
  const name = document.getElementById("name").value;
  const message = () => {
    if (name === userName) {
      return getMessage();
      console.log(getMessage)
    }
  };

  return (
    <div>
      <h1>Dear, {name}</h1>
      {message}
    </div>
  );
};

export default page;
