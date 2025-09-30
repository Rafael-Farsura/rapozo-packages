import { HttpClient } from "../client";
import {
  createSubAccountData,
  listSubAccountsParams,
  UpdateEscrowAccountParams,
} from "../types/subAccount";

class SubAccountModule {
  constructor(private httpClient: HttpClient) {}
  async createSubAccount(data: createSubAccountData): Promise<any> {
    return await this.httpClient.post("/accounts", data);
  }

  async listSubAccounts(params?: listSubAccountsParams): Promise<any> {
    return await this.httpClient.get("/accounts", params);
  }

  async getSubAccountById(id: string): Promise<any> {
    return await this.httpClient.get(`/accounts/${id}`);
  }

  async updateScrowAccountConfig(
    id: string,
    params?: UpdateEscrowAccountParams
  ): Promise<any> {
    return await this.httpClient.post(`accounts/${id}/escrow`, params);
  }

  async retrieveScrowAccountConfig(id: string): Promise<any> {
    return await this.httpClient.get(`accounts/${id}/escrow`);
  }
}

export { SubAccountModule as SubAccounts };
