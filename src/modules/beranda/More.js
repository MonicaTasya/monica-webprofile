"use client";
import React from "react";
import { HS1 } from "../../component/Elemen/Typography.js";
import DefaultLayout from "../../component/Layout/DefaultLayout";
import Card from "../../component/Elemen/Card";

const More = () => {
  const categories = [
    {
      src: "/images/beranda/project.webp",
      title: "Project",
      description:
        "You can see some of the projects I have worked on in this section",
      href: "/project",
    },
    {
      src: "/images/beranda/journey.webp",
      title: "Journey",
      description: "My cv and educational track record can be found here",
      href: "/journey",
    },
    {
      src: "/images/beranda/experience.webp",
      title: "Experience",
      description:
        "Other non-programming experiences that I have participated in",
      href: "/experience",
    },
  ];

  return (
    <DefaultLayout className="bg-[#DEEAFF]">
      <HS1>What do you want to know about me?</HS1>
      <div className="flex flex-wrap justify-center gap-[5vw] mt-[3vw] lg:gap-4 ">
        {categories.map((category, index) => (
          <Card
            key={index}
            src={category.src}
            title={category.title}
            description={category.description}
            href={category.href}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default More;
