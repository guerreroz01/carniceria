import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CustomButtonInt {
  title: string;
  href: string;
  bg: string;
  arrowBg: string;
}

function CustomButton({ bg, href, title, arrowBg }: CustomButtonInt) {
  return (
    <Link href={href}>
      <div
        className={`${bg} px-6 py-3 rounded-lg flex gap-2 font-semibold text-sm items-center cursor-pointer hover:scale-105 group`}
      >
        {title}
        <div className={`${arrowBg} rounded-lg px-2`}>
          <IoIosArrowRoundForward size={24} />
        </div>
      </div>
    </Link>
  );
}

export default CustomButton;
