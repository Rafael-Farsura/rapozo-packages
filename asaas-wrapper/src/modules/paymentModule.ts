import { HttpClient } from "../client";
import { PaymentParams } from "../types/payment";

class PaymentModule {
  constructor(private httpClient: HttpClient) {}
  async createPayment(data: PaymentParams): Promise<any> {
    return await this.httpClient.post("/payments", data);
  }

  async listPayments(params: any): Promise<any> {
    return await this.httpClient.get("/payments", {
      params: { params },
    });
  }

  async retrievePaymentBillingInfo(paymentId: string): Promise<any> {
    return await this.httpClient.get(`/payments/${paymentId}/billingInfo`);
  }

  async deletePayment(paymentId: string): Promise<any> {
    return await this.httpClient.delete(`/payments/${paymentId}`);
  }
}

export { PaymentModule as Payment };
