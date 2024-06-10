import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { unstable_cache } from "next/cache";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// async function getProjects() {
//   const projects = await fetch("/data/project.json").then(async (resource) =>
//     resource.json().then(async (projects) => {
//       return projects;
//     })
//   );
// }

// export const getCachedProjects = unstable_cache(getProjects);
