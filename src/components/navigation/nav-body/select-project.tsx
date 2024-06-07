"use client";
import React, {
  type Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";
import { useRouter } from "next/navigation";
import { ProjectContext } from "./nav-body";

const projects = [
  {
    value: "personal",
    label: "Personal",
  },
  {
    value: "work",
    label: "Work",
  },
  {
    value: "freelance",
    label: "Freelance",
  },
];

interface SelectProjectProps {
  setSelectedProject: Dispatch<SetStateAction<string>>;
}

const SelectProject: React.FC<SelectProjectProps> = ({
  setSelectedProject,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const selectedProject = useContext(ProjectContext);

  useEffect(() => {
    if (selectedProject === "") {
      router.push("/project");
    } else {
      router.push(`/project/${selectedProject}`);
    }
  }, [selectedProject, router]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-11/12 h-14 justify-between dark text-white border-2"
        >
          {selectedProject
            ? projects.find((project) => project.value === selectedProject)
                ?.label
            : "Select project..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 dark border-2">
        <Command>
          <CommandInput placeholder="Search project..." />
          <CommandEmpty>No project found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {projects.map((project) => (
                <CommandItem
                  key={project.value}
                  value={project.value}
                  onSelect={(currentValue) => {
                    setSelectedProject(
                      currentValue === selectedProject ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                  className="h-12"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedProject === project.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {project.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectProject;
