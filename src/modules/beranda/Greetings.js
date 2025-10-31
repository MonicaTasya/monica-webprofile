"use client";
import Image from "next/image";
import { HS1, HA1 } from "../../component/Elemen/Typography.js";
import DefaultLayout from "../../component/Layout/DefaultLayout";
import Typewriter from "typewriter-effect";
import Button from "../../component/Elemen/Button";

const Greetings = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#DEEAFF] to-[#ACC9FC]">
      <div className="flex flex-row gap-[2vw] justify-between">
        <div className="text-start text-[3vw] flex flex-col">
          <HS1>Hello! I&apos;m</HS1>
          <HA1 className="text-[#152746]">Monica Anastasya</HA1>
          <HS1 className="min-w-[46vw]">
            <Typewriter
              options={{
                strings: ["Undergraduate Student", "Front-end Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </HS1>
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
