import DefaultLayout from "../Layout/DefaultLayout";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { HA4 } from "./Typography";

const QuickLinks = [
  { name: "Project", href: "/project/" },
  { name: "Journey", href: "/journey/" },
  { name: "Experience", href: "/experience/" },
];

const Medsos = [
  { name: "Instagram", href: "https://www.instagram.com/anastasya_monicaa/" },
  { name: "LinkedIn", href: "https://linkedin.com/in/MonicaAnastasyaDantina" },
  { name: "GitHub", href: "https://github.com/MonicaAnastasyaDantina" },
];
const Footer = () => {
  return (
    <DefaultLayout className="bg-[#3F506E] lg:py-[2vw]! text-white">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
        <HA4 className="text-[2.3vw] lg:text-[20px] flex flex-col md:flex-row gap-3">
          <FaLocationDot className="w-5 h-5" /> Ngestiharjo, Kasihan, Bantul,
          Yogyakarta
        </HA4>

        <div>
          {" "}
          <HA4 className="mb-3">Quick Links</HA4>
          {QuickLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              <HA4 className="hover:underline">{item.name}</HA4>
            </Link>
          ))}
        </div>
        <div>
          <HA4 className="mb-3">Social Media</HA4>
          {Medsos.map((item, index) => (
            <Link key={index} href={item.href}>
              <HA4 className="hover:underline"> {item.name}</HA4>
            </Link>
          ))}
        </div>
        <div>
          <HA4 className="mb-3">Contact</HA4>
          <Link href="mailto:monicasyatasya@gmail.com">
            <HA4 className="hover:underline">Email</HA4>
          </Link>
        </div>
      </div>
      <hr className="my-[1vw] border-white" />
      <HA4 className="text-center">
        &copy; 2024 Monica Anastasya Dantina. All rights reserved.
      </HA4>
    </DefaultLayout>
  );
};

export default Footer;
