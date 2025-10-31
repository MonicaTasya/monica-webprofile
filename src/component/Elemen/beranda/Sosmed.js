import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { HA4 } from "../Typography";

const Sosmed = ({ href, icon: Icon, name }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <HA4 className="bg-[#3F506E] text-white w-[25vw] lg:w-[12vw] p-[0.7vw] rounded-lg flex flex-row gap-3 items-center hover:bg-[#2F3F5E] transition-colors cursor-pointer">
        <Icon className="w-7 h-7" /> {name}
      </HA4>
    </a>
  );
};

export const SocialMediaButtons = () => {
  const socials = [
    {
      href: "https://instagram.com/anastasya_monicaa",
      icon: FaInstagram,
      name: "Instagram",
    },
    {
      href: "https://linkedin.com/in/MonicaAnastasyaDantina",
      icon: CiLinkedin,
      name: "LinkedIn",
    },
    {
      href: "https://github.com/MonicaTasya",
      icon: FaGithub,
      name: "GitHub",
    },
  ];

  return (
    <div className="flex flex-row md:flex-col gap-[2vw]">
      {socials.map((social, index) => (
        <Sosmed
          key={index}
          href={social.href}
          icon={social.icon}
          name={social.name}
        />
      ))}
    </div>
  );
};

export default SocialMediaButtons;
