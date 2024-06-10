import Image from "next/image";
import React from "react";

interface CardInt {
  title: string;
  description: string;
  images: any[];
  onMouseOver: () => void;
}

function Card({ images, title, description, onMouseOver }: CardInt) {
  return (
    <div
      className="transition ease-in-out flex flex-col-reverse gap-2 hover:scale-105 pl-4 py-4 pr-4 border hover:border-0 hover:shadow hover:shadow-white/50 rounded-xl border-gray-400/10"
      onMouseOver={onMouseOver}
    >
      <div className="flex justify-end gap-4">
        {images.map((img) => (
          <div key={img.alt} className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={img.img}
              alt={img.alt}
              className="w-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center pl-4">
        <h2 className="text-2xl pb-4 font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
