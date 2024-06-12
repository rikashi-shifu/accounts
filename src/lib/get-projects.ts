import { supabaseAdmin } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabaseAdmin.from("projects").select(`*`);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
