"use client";
import DefaultLayout from "../../component/Layout/DefaultLayout";
import { HS1 } from "../../component/Elemen/Typography";
import SocialMediaButtons from "../../component/Elemen/beranda/Sosmed";
import dynamic from "next/dynamic";

const EmailContact = dynamic(
  () => import("../../component/Elemen/beranda/EmailContact"),
  { ssr: false, loading: () => <p>Loading form...</p> }
);

const Connect = () => {
  return (
    <DefaultLayout
      id="Connect"
      className="bg-linear-to-b from-[#DEEAFF] to-[#ACC9FC]"
    >
      <HS1 className="mb-[5vw]">Let&apos;s connect!</HS1>
      <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-between">
        <EmailContact />
        <SocialMediaButtons />
      </div>
    </DefaultLayout>
  );
};

export default Connect;
