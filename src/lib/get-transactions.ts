import { supabaseAdmin } from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabaseAdmin
    .from("transactions")
    .select(
      `*,
      debit:debit_id (*),
      credit:credit_id (*),
      project:project_id (*),
      profile:profile_id (*)`
    )
    .order("date", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
