import SelectProject from "./select-project";
import NavScrollable from "./nav-scrollable/nav-scrollable";
import ProjectContextProvider from "./project-context-provider";

const NavBody = () => {
  return (
    <div className="flex flex-col gap-3">
      <ProjectContextProvider>
        <div className="flex justify-center items-center px-1">
          <SelectProject />
        </div>
        <NavScrollable />
      </ProjectContextProvider>
    </div>
  );
};

export default NavBody;
