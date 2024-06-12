export interface Profile {
  id: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  name: string;
  username: string;
}

export interface Project {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  profile_id: string;

  profile: Profile;
}

export interface Account {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  category: string;
  ledger: string;
  project_id: string;
  profile_id: string;

  project: Project;
  profile: Profile;
}

export interface Transaction {
  id: string;
  created_at: Date;
  updated_at: Date;
  date: Date;
  debit_id: string;
  credit_id: string;
  folio: string;
  amount: number;
  project_id: string;
  profile_id: string;

  debit: Account;
  credit: Account;
  project: Project;
  profile: Profile;
}
