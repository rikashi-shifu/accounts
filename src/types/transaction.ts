export default interface Transaction {
  id: string;
  created_at: Date;
  date: Date;
  debit: string;
  debit_category: string;
  credit: string;
  credit_category: string;
  folio: string;
  amount: number;
  ledger: string;
  project: string;
  user: string;
}
