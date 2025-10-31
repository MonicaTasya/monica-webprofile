"use client";
import { HA3, HA4 } from "./Typography";
import { useRouter } from "next/navigation";
import { cn } from "../../utils/helpers/cn";

const Button = ({ href, name, className, name_xs }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    if (!href) return;

    if (href.startsWith("#")) {
      // scroll ke section di halaman yang sama
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else if (href.endsWith(".pdf")) {
      // download CV
      const link = document.createElement("a");
      link.href = href;
      link.download = href.split("/").pop(); // ambil nama file-nya otomatis
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // navigasi internal (Next.js)
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "bg-transparent hover:bg-[#152746] duration-400 rounded-3xl w-[20vw] lg:w-[12vw] border-3 border-[#152746] cursor-pointer transition-colors",
        className
      )}
    >
      <HA3 className="text-[#152746] hover:text-white">{name}</HA3>
      <HA4 className="text-[#152746] hover:text-white">{name_xs}</HA4>
    </button>
  );
};

export default Button;
