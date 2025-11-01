import DefaultLayout from "../../../src/component/Layout/DefaultLayout";
import { HS1 } from "../../../src/component/Elemen/Typography";
import Button from "../../../src/component/Elemen/Button";
import { NavbarResolver } from "../../../src/component/Layout/NavbarResolver";

const Journey = () => {
  return (
    <DefaultLayout className="bg-linear-to-b min-h-screen flex justify-start from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <HS1> Journey</HS1>
      <div className="flex flex-col items-center mt-[5vw]">
        <div className="w-full h-[60vw] lg:w-[50vw] lg:h-[30vw] rounded-xl overflow-hidden justify-center mx-auto shadow-xl">
          <iframe
            src="https://drive.google.com/file/d/1zBDt2CR1qoQFeaH3QZ6RPdjceyql5JW7/preview"
            width="100%"
            height="100%"
            className="md:scale-105 origin-center"
          ></iframe>
        </div>
        <Button
          name_xs="Download cv"
          href="/CV_Monica.pdf"
          className="mt-[5vw]"
        />
      </div>
    </DefaultLayout>
  );
};

export default Journey;
