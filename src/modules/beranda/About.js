import Image from "next/image";
import { HS1, HA4 } from "../../component/Elemen/Typography.js";
import DefaultLayout from "../../component/Layout/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#ACC9FC] to-[#DEEAFF]">
      <div className="flex flex-row justify-between">
        <Image
          src="/images/beranda/profile2.webp"
          alt="about-me"
          width={400}
          height={400}
          className="hidden lg:block w-[30vw] rounded-xl"
        />
        <div className="flex flex-col">
          <HS1>Little about me</HS1>
          <HA4 className="mt-[1vw] w-full lg:w-[30vw]">
            I was born at 2006, so at this moment I’m 19 years old. I’m a
            undergraduate student at Gadjah Mada University. Majoring in
            Technology major, makes me excited, curious, and eager to learn new
            things about tech. Currently I focus exploring about Front-end
            Development
          </HA4>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
