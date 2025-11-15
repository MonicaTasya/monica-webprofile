import DefaultLayout from "../../../../src/component/Layout/DefaultLayout";
import { HS1 } from "../../../../src/component/Elemen/Typography";
import Image from "next/image";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default async function ExperienceDetail({ params }) {
  const { experience } = params;
  const res = await fetch(
    `${baseUrl}/api/experiences?where[slug][equals]=${experience}&depth=2`,
    { cache: "no-store" } // opsional, biar gak ke-cache
  );
  const data = await res.json();
  const exp = data.docs[0];

  console.log("Experience detail:", exp);
  console.log("Image URL:", exp?.src?.url);

  if (!exp)
    return (
      <div className="flex items-center bg-linear-to-b min-h-screen from-[#ACC9FC] to-[#DEEAFF] justify-center">
        <HS1>This page still on Progress</HS1>
      </div>
    );

  return (
    <DefaultLayout className="bg-[#DEEAFF] min-h-screen">
      <HS1>{exp.title}</HS1>
      <p className="mt-4">{exp.description}</p>
      {exp.src?.url && (
        <Image
          src={exp.src.url}
          alt={exp.title || "Experience image"}
          width={500}
          height={300}
          className="mt-6 rounded-xl"
        />
      )}
      {!exp.src?.url && <p className="text-red-500">Image URL not found</p>}
    </DefaultLayout>
  );
}
