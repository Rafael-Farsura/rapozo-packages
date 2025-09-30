interface Discount {
  value: number;
  dueDateLimitDays: number;
  type: "FIXED" | "PERCENTAGE";
}

interface Interest {
  value: number;
}

interface Fine {
  value: number;
  type: "FIXED" | "PERCENTAGE";
}

interface Split {
  walletId: string;
  fixedValue?: number;
  percentualValue?: number;
  externalReference?: string;
  description?: string;
}

interface Callback {
  successUrl: string;
  autoRedirect: boolean;
}

export interface SubscriptionData {
  billingType: "CREDIT_CARD" | "BOLETO" | "PIX";
  cycle: "MONTHLY" | "ANNUALLY" | "WEEKLY";
  customer: string;
  value: number;
  nextDueDate: string;
  creditCardToken?: string;
  discount?: Discount;
  interest?: Interest;
  fine?: Fine;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  externalReference?: string;
  split?: Split[];
  callback?: Callback;
}

type SubscriptionStatus =
  | "ACTIVE"
  | "EXPIRED"
  | "CANCELLED"
  | "PENDING"
  | "OVERDUE"
  | "RECEIVED"
  | "REFUNDED";

export interface PaymentQueryParams {
  status?: SubscriptionStatus;
  limit?: number;
  offset?: number;
}

export interface PaymentBookQueryParams {
  month?: number;
  year?: number;
  sort?: string;
  order?: string;
}

export interface ListSubscriptionQueryParams {
  offset?: number;
  limit?: number;
  customer?: string;
  customerGroupName?: string;
  billingType?: "CREDIT_CARD" | "BOLETO" | "PIX";
  status?: SubscriptionStatus;
  deletedOnly?: boolean;
  includeDeleted?: boolean;
  externalReference?: string;
  order?: "asc" | "desc";
  sort?: string;
}
