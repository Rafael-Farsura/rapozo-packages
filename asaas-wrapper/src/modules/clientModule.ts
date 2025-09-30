import { dataClientInterface } from "../types/clients";
import { HttpClient } from "../client";

class ClientModule {
  constructor(private httpClient: HttpClient) {}
  async getClients(): Promise<any> {
    return this.httpClient.get("/customers");
  }

  async createNewClient(data: dataClientInterface): Promise<any> {
    return this.httpClient.post("/customers", data);
  }

  async getClientById(id: string): Promise<any> {
    return this.httpClient.get(`/customers/${id}`);
  }

  async updateClientById(id: string, data: dataClientInterface): Promise<any> {
    return this.httpClient.put(`/customers/${id}`, data);
  }

  async deleteClientById(id: string): Promise<any> {
    return this.httpClient.delete(`/customers/${id}`);
  }

  async restoreClient(id: string): Promise<any> {
    return await this.httpClient.post(`/customers/${id}/restore`, {});
  }
}

export { ClientModule as Client };
