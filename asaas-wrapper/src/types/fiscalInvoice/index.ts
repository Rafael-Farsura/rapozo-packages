export interface FiscalInvoiceParams {
  email: string;
  municipalInscription?: string;
  simplesNacional: boolean;
  culturalProjectsPromoter?: boolean;
  cnae: string;
  specialTaxRegime?: string;
  servicesListItem?: string;
  nbsCode?: string;
  rpsSerie?: string;
  rpsNumber?: string;
  username?: string;
  password?: string;
  accessToken?: string;
  certificateFile?: File;
  certificatePassword?: string;
  nationalPortalTaxCalculationRegime?: string;
}
