export interface TypeAsaasQrCode {
  encodedImage: string;
  payload: string;
}

export interface TypeAsaasPixKey {
  id: string;
  key: string;
  type: "EVP";
  status: TypeAsaasStatusKey;
  dateCreated: string;
  canBeDeleted: boolean;
  cannotBeDeletedReason: string | null;
  qrCode: TypeAsaasQrCode;
}

export interface TypeAsaasPixKeyFindAll {
  totalCount: number;
  limit: number;
  offset: number;
  hasMore: boolean;
  data: TypeAsaasPixKey[];
}

export interface TypeAsaasPixStaticQrCode {
  id: string;
  encodedImage: string;
  payload: string;
  allowsMultiplePayments: boolean;
  expirationDate: string;
  externalReference: string | null;
  description: string;
}

export type TypeAsaasStatusKey =
  | "AWAITING_ACTIVATION"
  | "ACTIVE"
  | "AWAITING_DELETION"
  | "AWAITING_ACCOUNT_DELETION"
  | "DELETED"
  | "ERROR";
