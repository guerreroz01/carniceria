"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { IoIosClose } from "react-icons/io";

interface BannerInt {
  title: string;
  href: string;
}

export default function Banner({ title, href }: BannerInt) {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`relative my-10 py-6 px-10 rounded-3xl bg-bgs/50 flex items-center ${
        hidden && "hidden"
      }`}
    >
      <p className="flex-1">{title}</p>
      <CustomButton title="Explora" href={href} arrowBg="bg-bgs" bg="bg-bg" />
      <button
        onClick={() => setHidden(true)}
        className="absolute top-2 right-2 z-10 cursor-pointer hover:bg-white hover:text-bg rounded-full"
      >
        <IoIosClose size={24} />
      </button>
    </div>
  );
}
