type PaymentBillingType = "CREDIT_CARD" | "BOLETO" | "PIX";

interface Discount {
  value?: number;
  dueDatelimitDays?: number;
  type?: "FIXED" | "PERCENTAGE";
}

interface Fine {
  value: number;
  type?: "FIXED" | "PERCENTAGE";
}

interface Split {
  walletId: string;
  fixedValue?: number;
  percentualValue: number;
  totalFixedValue?: number;
  externalReference?: string;
  description: string;
}

export interface PaymentParams {
  customer: string;
  billingType: PaymentBillingType;
  value: number;
  dueDate: Date;
  description?: string;
  daysAfterDueDateToRegistrationCancellation?: number;
  externalReference?: string;
  installmentCount?: number;
  totalValue?: number;
  installmentValue?: number;
  discount?: Discount;
  interest?: {
    value: number;
  };
  fine?: Fine;
  split?: Split[];
  callback: {
    successUrl?: string;
    autoRedirect?: boolean;
  };
}
