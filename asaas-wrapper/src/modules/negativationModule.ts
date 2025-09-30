import { HttpClient } from "../client";
import {
  ListNegativationParams,
  NegativationData,
} from "../types/negativation";

class NegativationModule {
  constructor(private httpClient: HttpClient) {}

  async createNegativation(data: NegativationData): Promise<any> {
    return await this.httpClient.post("/paymentDunnings", data);
  }

  async listNegativation(params?: ListNegativationParams): Promise<any> {
    return await this.httpClient.get("/paymentDunnings", params);
  }

  async getNegativationById(id: string): Promise<any> {
    return await this.httpClient.get(`/paymentDunnings/${id}`);
  }

  async listNegativationHistory(
    id: string,
    params: ListNegativationParams
  ): Promise<any> {
    return await this.httpClient.get(`paymentDunnings/${id}/history`, params);
  }

  async listNegativationPartialPayment(
    id: string,
    params: ListNegativationParams
  ): Promise<any> {
    return await this.httpClient.get(
      `paymentDunnings/${id}/partialPayments`,
      params
    );
  }

  async listNegativationPaymentAvaibleDunning(
    id: string,
    params: ListNegativationParams
  ): Promise<any> {
    return await this.httpClient.get(
      `paymentDunnings/${id}/paymentsAvailableForDunning`,
      params
    );
  }

  async cancelNegativationById(
    id: string,
    data: NegativationData
  ): Promise<any> {
    return await this.httpClient.post(`paymentDunnings/${id}/cancel`, data);
  }
}

export { NegativationModule as Negativation };
