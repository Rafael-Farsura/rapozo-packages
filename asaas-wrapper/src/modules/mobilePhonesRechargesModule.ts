import { HttpClient } from "../client";
import {
  ListMobilePhoneRechargesParams,
  MobilePhoneRechargesData,
} from "../types/mobilePhoneRecharges";

class mobilePhoneRechargesModule {
  constructor(private httpClient: HttpClient) {}

  async createNewRecharge(data: MobilePhoneRechargesData): Promise<any> {
    return this.httpClient.post("/mobilePhoneRecharges", data);
  }

  async listMobilePhoneRecharges(
    params: ListMobilePhoneRechargesParams
  ): Promise<any> {
    return this.httpClient.get(`/mobilePhoneRecharges`, params);
  }

  async getRechargesById(id: string): Promise<any> {
    return this.httpClient.get(`/mobilePhoneRecharges/${id}`);
  }

  async cancelRechargesById(
    id: string,
    data: MobilePhoneRechargesData
  ): Promise<any> {
    return this.httpClient.post(`/mobilePhoneRecharges/${id}/cancel`, data);
  }

  async getMobilePhoneRechargesByPhoneNumber({
    phoneNumber,
  }: MobilePhoneRechargesData): Promise<any> {
    return this.httpClient.get(`/mobilePhoneRecharges/${phoneNumber}`);
  }
}

export { mobilePhoneRechargesModule as mobilePhoneRecharges };
