"use client";
import Image from "next/image";
import React, { useState } from "react";
import { verticalImages } from "@/constants";
import Card from "./Card";

function CardContainer() {
  const [activeImg, setActiveImg] = useState(verticalImages[0]);

  return (
    <section className=" mt-10 py-8 flex h-screen">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl overflow-hidden">
          <Image
            src={activeImg.img}
            alt={activeImg.alt}
            className="w-full h-full transition-all ease-in-out"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-8 ml-4 px-4 justify-around">
        <Card
          images={verticalImages}
          title="Especialistas en filetes"
          description="Los mejores filetes del mercado, puedes encontrar filetes para el asado o el guiso."
          onMouseOver={() => setActiveImg(verticalImages[0])}
        />
        <Card
          images={verticalImages}
          title="Los mejores cortes"
          description="Los mejores filetes del mercado, puedes encontrar filetes para el asado o el guiso."
          onMouseOver={() => setActiveImg(verticalImages[1])}
        />
        <Card
          images={verticalImages}
          title="Aves, res y cerdo"
          description="Los mejores filetes del mercado, puedes encontrar filetes para el asado o el guiso."
          onMouseOver={() => setActiveImg(verticalImages[2])}
        />
        <Card
          images={verticalImages}
          title="Cocidos y asados"
          description="Los mejores filetes del mercado, puedes encontrar filetes para el asado o el guiso."
          onMouseOver={() => setActiveImg(verticalImages[3])}
        />
      </div>
    </section>
  );
}

export default CardContainer;
