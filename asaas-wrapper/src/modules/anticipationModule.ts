import { HttpClient } from "../client";
import { requestAntecipationData, simulateAntecipationData } from "../types";

class AnticipationModule {
  constructor(private httpClient: HttpClient) {}

  async getAntecipation(id: string): Promise<any> {
    return await this.httpClient.get(`anticipations/${id}`);
  }
  async requestAntecipation(data: requestAntecipationData): Promise<any> {
    return await this.httpClient.post("/anticipations", data);
  }

  async listAntecipations(): Promise<any> {
    return await this.httpClient.get(`/anticipations`);
  }

  async simulateAntecipation(data: simulateAntecipationData): Promise<any> {
    return await this.httpClient.post("/anticipations", data);
  }

  async updateAntecipationStatus(data: boolean): Promise<any> {
    return await this.httpClient.post("/anticipations/configurations", data);
  }

  async requestAntecipationStatus(): Promise<any> {
    return await this.httpClient.get("/anticipations/configurations");
  }

  async requestAntecipationLimit(): Promise<any> {
    return await this.httpClient.get("/anticipations/limits");
  }

  async cancelAntecipation(id: string): Promise<any> {
    return await this.httpClient.post(`anticipations/${id}/cancel`, {});
  }
}

export { AnticipationModule as Anticipation };
