export interface createSubAccountData {
  name: string;
  email: string;
  loginEmail?: string;
  cpfCnpj: string;
  birthDate?: string;
  companyType?: string;
  phone?: string;
  mobilePhone: string;
  site?: string;
  incomeValue: number;
  address: string;
  addressNumber: string;
  complement?: string;
  province?: string;
  postalCode: string;
  webhooks?: webhooksData[];
}

export interface webhooksData {
  name?: string;
  url?: string;
  email?: string;
  enable?: boolean;
  interrupted?: boolean;
  apiVersion?: string;
  authVersion?: string;
  authToken?: string;
  sendType?: string;
  events?: string[];
}

export interface listSubAccountsParams {
  offset?: number;
  limit?: number;
  name?: string;
  email?: string;
  cpfCnpj?: string;
}

export interface UpdateEscrowAccountParams {
  daysToExpire: number;
  enabled?: boolean;
  isFeePayer?: boolean;
}
