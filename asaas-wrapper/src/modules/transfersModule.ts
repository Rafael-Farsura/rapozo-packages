import { HttpClient } from "../client";
import { Transfer } from "../types/transfers/createTransfers";
import { listTransfer } from "../types/transfers/listTransfers";
import { TransferAsaas } from "../types/transfers/transferToAsaasAccount";

class Transfers {
  constructor(private httpClient: HttpClient) {}

  async createPixTedTransfer(data: Transfer): Promise<any> {
    return await this.httpClient.post("/transfers", data);
  }

  async listTransfers(params?: listTransfer): Promise<any> {
    return await this.httpClient.get("/transfers", params);
  }

  async transferToAsaasAccount(data: TransferAsaas): Promise<any> {
    return await this.httpClient.post("/transfers", data);
  }

  async findUniqueTransfer(id: string): Promise<any> {
    return await this.httpClient.get(`transfers/${id}`);
  } 

  async cancelTransfer(id: string): Promise<any> {
    return await this.httpClient.delete(`transfers/${id}/cancel`);
  }
}

export { Transfers as Transfers };
