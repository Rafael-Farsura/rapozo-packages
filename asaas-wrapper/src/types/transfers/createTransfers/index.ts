export enum BankAccountType {
  CONTA_CORRENTE = "CONTA_CORRENTE",
  CONTA_POUPANCA = "CONTA_POUPANCA"
}

export enum OperationType {
  TED = "TED",
  PIX = "PIX",
  INTERNAL = "PIX"
}

export enum PixAddressKeyType {
  CPF = "CPF",
  CNPJ = "CNPJ",
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  EVP = "EVP"
}

export enum RecurringFrequency {
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY"
}

// Interfaces
export interface Bank {
  code: string;
}

export interface BankAccount {
  bank: Bank;
  accountName?: string;
  ownerName: string;
  ownerBirthDate?: string;
  cpfCnpj: string;
  agency: string;
  account: string;
  accountDigit: string;
  bankAccountType?: BankAccountType;
  ispb?: string;
}

export interface Recurring {
  frequency?: RecurringFrequency;
  quantity?: number;
}

export interface Transfer {
  value: number;
  operationType: OperationType;
  pixAddressKey?: string;
  pixAddressKeyType?: PixAddressKeyType;
  description?: string;
  scheduleDate?: string;
  externalReference?: string;
  bankAccount?: BankAccount; // pode ser opcional se usar Pix
  recurring?: Recurring;
}
