import DefaultLayout from "../../../src/component/Layout/DefaultLayout";
import Project from "../../../src/modules/project/Project";
import { NavbarResolver } from "../../../src/component/Layout/NavbarResolver";

const Projects = () => {
  return (
    <DefaultLayout className="flex justify-start bg-linear-to-b min-h-screen from-[#ACC9FC] to-[#DEEAFF]">
      <NavbarResolver />
      <Project />
    </DefaultLayout>
  );
};

export default Projects;
