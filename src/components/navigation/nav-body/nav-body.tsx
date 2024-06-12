import SelectProject from "./select-project";
import NavScrollable from "./nav-scrollable/nav-scrollable";
import ProjectContextProvider from "./project-context-provider";
import { Account, Project } from "@/types/types";
import { getProjects } from "@/lib/get-projects";
import { getAccounts } from "@/lib/get-accounts";

export interface FormattedProject {
  value: string;
  label: string;
}

const NavBody = async () => {
  const projects: Project[] = await getProjects();
  const accounts: Account[] = await getAccounts();

  const formattedProjects: FormattedProject[] = projects.map((project) => ({
    value: project.name.toLowerCase(),
    label: project.name,
  }));

  return (
    <div className="flex flex-col gap-3">
      <ProjectContextProvider>
        <div className="flex justify-center items-center px-1">
          <SelectProject projects={formattedProjects} />
        </div>
        <NavScrollable accounts={accounts} />
      </ProjectContextProvider>
    </div>
  );
};

export default NavBody;
