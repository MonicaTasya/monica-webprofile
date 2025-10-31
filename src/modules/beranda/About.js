import React from "react";
import { HS1, HA4 } from "../../component/Elemen/Typography.js";
import DefaultLayout from "../../component/Layout/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout className="bg-linear-to-b from-[#ACC9FC] to-[#DEEAFF]">
      <div className="flex flex-row justify-between">
        <div className="bg-gray-600 w-[30vw] h-[30vw] hidden lg:block">
          sesuatu gitu apa kek:V
        </div>
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
