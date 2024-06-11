export interface Project {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  profile: string;
}

export interface Account {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  category: string;
  ledger: string;
  project: string;
  profile: string;
}

export interface Transaction {
  id: string;
  created_at: Date;
  updated_at: Date;
  date: Date;
  debit: string;
  credit: string;
  folio: string;
  amount: number;
  project: string;
  profile: string;
}
