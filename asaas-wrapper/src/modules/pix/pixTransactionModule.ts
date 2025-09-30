import { AsaasClient, HttpClient } from "../../client";

interface QrCodeTransactionParams {
  qrCode: string;
  value: number;
  description?: string;
  scheduleDate?: Date;
}

class PixTransactionModule {
  constructor(private httpClient: HttpClient) {}
  async payQrCode(data: QrCodeTransactionParams): Promise<any> {
    return await this.httpClient.post("/pix.qrCodes/pay", { data });
  }

  async listTransactions(params: any): Promise<any> {
    return await this.httpClient.get("/pix/transactions", { params });
  }

  async cancelScheduledTransaction(id: string): Promise<any> {
    return await this.httpClient.post(`/pix/transactions/${id}/cancel`, {});
  }
}

export { PixTransactionModule as PixTransaction };
