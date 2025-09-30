export interface CreateBillPaymentData {
  identificationField: string;
  scheduleDate?: string;
  description?: string;
  discount?: number;
  interest?: number;
  fine?: number;
  dueDate?: string;
  value?: number;
  externalReference?: string;
}

export interface listBillsParams {
  offset?: number;
  limit?: number;
}
