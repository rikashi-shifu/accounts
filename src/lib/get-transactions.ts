import { supabaseAdmin } from "./supabase";

export async function getTransactions() {
  const transactions = await supabaseAdmin
    .from("transactions")
    .select(
      `*,
      debit:debit_id (*),
      credit:credit_id (*),
      project:project_id (*),
      profile:profile_id (*)`
    )
    .order("date", { ascending: true });

  if (transactions.data) {
    console.log(transactions.data);
  }

  if (transactions.error) {
    throw new Error(transactions.error.message);
  }

  return transactions.data;
}
