"use client";
import { useEffect, useState } from "react";
import DefaultLayout from "../../../src/component/Layout/DefaultLayout";
import { HS1 } from "../../../src/component/Elemen/Typography";
import Card from "../../../src/component/Elemen/Card";
import { NavbarResolver } from "../../../src/component/Layout/NavbarResolver";
import axios from "../../../src/lib/axiosInstance";

const Experiences = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("/api/experiences?depth=1");
        console.log("Experience data:", res.data.docs);
        setData(res.data.docs);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError(err.message);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <DefaultLayout className="bg-linear-to-b min-h-screen from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <HS1>Experience</HS1>
      {error && <div className="text-red-500">Error: {error}</div>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[3vw]">
        {data.map((exp) => {
          console.log("Experience item:", exp);
          return (
            <Card
              key={exp.slug}
              src={exp.src?.url} // gambar dari Payload/Supabase
              title={exp.title}
              description={exp.description}
              href={`/experience/${exp.slug}`} // link ke detail page
            />
          );
        })}
      </div>
    </DefaultLayout>
  );
};

export default Experiences;
