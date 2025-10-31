import DefaultLayout from "../../../../src/component/Layout/DefaultLayout";
import { HS1 } from "../../../../src/component/Elemen/Typography";
import Image from "next/image";

export default async function ExperienceDetail({ params }) {
  const { slug } = params;
  const res = await fetch(
    `http://localhost:3000/api/experiences?where[slug][equals]=${slug}`
  );
  const data = await res.json();
  const exp = data.docs[0];

  if (!exp) return <div className="p-10 text-2xl">Experience not found</div>;

  return (
    <DefaultLayout className="bg-[#DEEAFF] min-h-screen">
      <HS1>{exp.title}</HS1>
      <p className="mt-4">{exp.description}</p>
      <Image
        src={exp.src?.url}
        alt={exp.title}
        width={500}
        height={300}
        className="mt-6 rounded-xl"
      />
    </DefaultLayout>
  );
}
