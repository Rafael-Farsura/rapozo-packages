import { dataClientInterface } from "../types/clients";
import { HttpClient } from "../client";
import { CreateBillPaymentData, listBillsParams } from "../types/bill";

class BillModule {
  constructor(private httpClient: HttpClient) {}

  async createNewBillPayment(data: CreateBillPaymentData): Promise<any> {
    return this.httpClient.post("/bill", data);
  }

  async listBillPayment(params: listBillsParams): Promise<any> {
    return this.httpClient.get(`/bill`, params);
  }

  async getBillById(id: string): Promise<any> {
    return this.httpClient.get(`/bill/${id}`);
  }

  async cancelBillById(id: string): Promise<any> {
    return this.httpClient.delete(`/bill/${id}/cancel`);
  }
}

export { BillModule as Bill };
