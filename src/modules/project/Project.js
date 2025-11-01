"use client";
import { useEffect, useState } from "react";
import Card from "../../component/Elemen/Card";
import { HS1 } from "../../component/Elemen/Typography";
import axios from "../../lib/axiosInstance";

const Project = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get("/api/projects?depth=1");
        console.log("Project data:", res.data.docs);
        setData(res.data.docs);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      }
    };
    fetchProject();
  }, []);

  return (
    <>
      <HS1> Projects</HS1>
      {error && <p>Error fetching projects: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[5vw] mt-[5vw]">
        {data.map((project) => {
          console.log("Project item:", project);
          return (
            <Card
              key={project.id}
              src={project.src?.url} // ← Fix: Akses .url dari relationship
              title={project.title}
              description={project.description}
              href={project.href}
            />
          );
        })}
      </div>
    </>
  );
};

export default Project;
