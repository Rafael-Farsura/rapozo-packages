export interface NegativationData {
  id: string;
  dunningNumber: number;
  status: "PENDING" | "APPROVED" | "DENIED" | "CANCELLED";
  type: "CREDIT_BUREAU";
  requestDate: string;
  description?: string;
  value: number;
  feeValue: number;
  netValue: number;
  denialReason?: string | null;
  canBeCancelled?: boolean | null;
  cannotBeCancelledReason?: string | null;
  customerComplement?: string;
  isNecessaryResendDocumentation?: boolean | null;
  payment: string;
}

export interface ListNegativationParams {
  hasMore?: boolean;
  totalCount?: number;
  limit?: number;
  offsetw?: number;
}
