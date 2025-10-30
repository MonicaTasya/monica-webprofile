"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
axios.defaults.url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const init = async () => {
      const response = await axios.get("api/siswa");
      setData(response.data.docs);
    };
    init();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data ? (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Image
            src={data[1]["foto"].url}
            alt="foto"
            width={500}
            height={500}
          />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
