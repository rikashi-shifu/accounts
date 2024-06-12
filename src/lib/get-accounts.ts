import { supabaseAdmin } from "./supabase";

export async function getAccounts() {
  const { data, error } = await supabaseAdmin
    .from("accounts")
    .select(`*, project:project_id (*)`);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
