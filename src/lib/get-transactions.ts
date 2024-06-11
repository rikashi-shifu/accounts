import { supabaseAdmin } from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabaseAdmin.from("transactions").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
