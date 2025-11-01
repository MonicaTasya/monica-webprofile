"use client";
import Image from "next/image";
import { HS2, HA1 } from "../../component/Elemen/Typography.js";
import DefaultLayout from "../../component/Layout/DefaultLayout";
import Typewriter from "typewriter-effect";
import Button from "../../component/Elemen/Button";

const Greetings = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#DEEAFF] to-[#ACC9FC]">
      <div className="flex flex-row justify-between  items-end">
        <div className="text-start text-[3vw] flex flex-col">
          <HS2>Hello! I&apos;m</HS2>
          <HA1 className="text-[#152746]">Monica Anastasya</HA1>
          <HS2 className="min-w-[46vw]">
            <Typewriter
              options={{
                strings: ["IT Undergraduate", "Front-end Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </HS2>
          <div className="flex flex-row gap-3">
            <Button name_xs="Download cv" href="/CV_Monica.pdf" />
            <Button name_xs="Contact" href="#Connect" />
          </div>
        </div>
        <Image
          src="/images/beranda/profile.webp"
          alt="Profile Picture"
          width={200}
          height={200}
          className="object-cover w-[30vw] lg:w-[20vw] rounded-lg"
        />
      </div>
    </DefaultLayout>
  );
};

export default Greetings;
