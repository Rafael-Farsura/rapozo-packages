import { HttpClient } from "../client";
import {
  ListSubscriptionQueryParams,
  PaymentBookQueryParams,
  PaymentQueryParams,
  SubscriptionData,
} from "../types/subscriptions";

class SubscriptonsModule {
  constructor(private httpClient: HttpClient) {}

  async createSubscriptions(data: SubscriptionData): Promise<any> {
    return await this.httpClient.post("/subscriptions", data);
  }

  async listSubsubscriptions(
    params?: ListSubscriptionQueryParams
  ): Promise<any> {
    return await this.httpClient.get("/subscriptions", params);
  }

  async listPaymentBySubscriptions(
    id: string,
    params: PaymentQueryParams
  ): Promise<any> {
    return await this.httpClient.get(`/subscriptions/${id}/payments`, {
      params,
    });
  }

  async listPaymentBookBySubscriptions(
    id: string,
    params: PaymentBookQueryParams
  ): Promise<any> {
    return await this.httpClient.get<Blob>(
      `/subscriptions/${id}/paymentBook`,
      params,
      {
        headers: { accept: "application/pdf" },
        responseType: "blob",
      }
    );
  }

  async getSubscriptionsById(id: string): Promise<any> {
    return await this.httpClient.get(`/subscriptions/${id}`);
  }

  async updateScrowAccountConfig(
    id: string,
    data: SubscriptionData
  ): Promise<any> {
    return await this.httpClient.put(`subscriptions/${id}`, data);
  }

  async deleteSubscriptions(id: string): Promise<any> {
    return await this.httpClient.delete(`subscriptions/${id}`);
  }
}

export { SubscriptonsModule as Subscriptions };
