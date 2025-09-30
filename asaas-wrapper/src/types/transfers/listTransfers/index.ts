export interface listTransfer {
  'dateCreated[ge]'?: string;
  'dateCreated[le]'?: string;
  'transferDate[ge]'?: string;
  'transferDate[le]'?: string;
  type?: TransfersType;
}

export enum TransfersType {
  BANK_ACCOUNT = "BANK_ACCOUNT",
  ASAAS_ACCOUNT = "ASAAS_ACCOUNT"
}