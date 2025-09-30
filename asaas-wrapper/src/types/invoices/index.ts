export interface AsaasInvoice {
  payment?: string;
  installment?: string;
  customer?: string;
  serviceDescription: string;
  observations?: string;
  value: number;
  deductions?: number;
  effectiveDate: string;
  municipalServiceId: string;
  municipalServiceCode: string;
  municipalServiceName: string;
  taxes?: {
    retainIss?: boolean;
    iss?: number;
    cofins?: number;
    csll?: number;
    inss?: number;
    ir?: number;
    pis?: number;
  };
}
