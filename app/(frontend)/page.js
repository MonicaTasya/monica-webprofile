"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const baseURL = process.env.NEXT_PUBLIC_API_URL || "";
        const response = await axios.get(`${baseURL}/api/siswa`);
        console.log("API Response:", response.data);
        setData(response.data.docs);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };
    init();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {error ? (
        <div>
          <h1>Error: {error}</h1>
        </div>
      ) : data && data.length > 0 && data[0].foto ? (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Image src={data[0].foto.url} alt="foto" width={500} height={500} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
