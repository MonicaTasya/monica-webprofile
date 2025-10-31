"use client";
import Image from "next/image";
import { HA3, HA4 } from "./Typography.js";
import { useRouter } from "next/navigation";

const Card = ({ src, title, description, href }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (href.startsWith("https://")) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          router.push(href);
        }
      }}
      className="flex justify-center hover:text-[#FFFFFF] hover:scale-105 duration-400 cursor-pointer"
    >
      <div className="w-[30vw] h-[40vw] lg:w-[17vw] lg:h-[26vw] bg-[#ACC9FC] hover:bg-[#3F506E] duration-400 rounded-2xl">
        <div className="w-full h-[12vw] rounded-tl-xl rounded-tr-xl overflow-hidden">
          {src && (
            <Image
              src={src}
              alt={title || "Card image"}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <HA3 className="w-[25vw] lg:w-[15vw] text-center mx-auto">{title}</HA3>
        <HA4 className="text-[2vw] lg:text-[18px] w-[23vw] lg:w-[15vw] text-center mx-auto">
          {description}
        </HA4>
      </div>
    </button>
  );
};

export default Card;
