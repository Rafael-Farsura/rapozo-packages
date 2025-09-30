import { HttpClient } from "../client";
import { FiscalInvoiceParams } from "../types/fiscalInvoice";

class FiscalInvoiceModule {
  constructor(private httpClient: HttpClient) {}
  async listMunicipalConfig(): Promise<any> {
    return await this.httpClient.get("/fiscalInfo/municipalOptions");
  }

  async createUpdateTaxInfo(data: FiscalInvoiceParams): Promise<any> {
    return await this.httpClient.post("/fiscalInfo", data);
  }

  async retrieveTaxInfo(): Promise<any> {
    return await this.httpClient.get("/fiscalInfo");
  }

  async listMunicipalServices(): Promise<any> {
    return await this.httpClient.get("/fiscalInfo/services");
  }

  async listNbsCodes(): Promise<any> {
    return await this.httpClient.get("/fiscalInfo/nbsCodes");
  }

  async configureInvoiceIssuingPortal(enabled: boolean): Promise<any> {
    return await this.httpClient.get("/fiscalInfo/nationalPortal", {
      enabled,
    });
  }
}

export { FiscalInvoiceModule as FiscalInvoice };
