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
        // Pakai relative path supaya otomatis HTTPS di production
        const response = await axios.get("/api/siswa");
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
          <h1 className="text-red-500">Error: {error}</h1>
          <p className="text-sm mt-2">Check browser console for details</p>
        </div>
      ) : data && data.length > 0 && data[0].gambar ? (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <Image
            src={data[0].gambar.url}
            alt="gambar"
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
