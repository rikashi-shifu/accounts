import supabase from "./supabase-client";

export async function fetchTransactions() {
  const { data, error } = await supabase.from("transactions").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
