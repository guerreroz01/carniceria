import { heroImage } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

function Hero() {
  return (
    <section className="w-full flex items-center rounded-2xl overflow-hidden relative h-[750px] shadow-2xl shadow-white/50">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20">
        <Image
          src={heroImage}
          alt="hero image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="blur-vignette absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
      <div className="max-w-lg px-8 py-10">
        <h1 className="text-8xl">Video simplified</h1>
        <p>Everithing you need to make, manage, and share brillant videos.</p>
        <div className="flex justify-around gap-2 py-4">
          <CustomButton
            title="See plans"
            bg="bg-bg"
            arrowBg="bg-bgs"
            href="/"
          />
          <CustomButton
            title="Join for free"
            bg="bg-bg"
            arrowBg="bg-bgs"
            href="/"
          />
        </div>
      </div>
      <div className="self-end ml-auto  px-10">
        <p className="px-10 py-6 backdrop-blur-sm bg-white/30 rounded-t-2xl font-bold text-gray-50">
          287 millions creatives, entrepreneurs, and bussiness trust vimeo
        </p>
      </div>
    </section>
  );
}

export default Hero;
