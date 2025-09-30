import {
  TypeAsaasPixKey,
  TypeAsaasPixKeyFindAll,
  TypeAsaasPixStaticQrCode,
  TypeAsaasStatusKey,
} from "@types";
import { HttpClient } from "../../client";
import { PixKeyType } from "@rapozo/prisma";

interface getPixParams {
  offset?: number;
  limit?: number;
  status?: TypeAsaasStatusKey;
  statusList?: string;
}

interface CreateQRCodeParams {
  addressKey?: string;
  description?: string;
  value?: number;
  format?: string;
  expirationDate?: Date;
  expirationSeconds?: number;
  allowsMultiplePayments?: boolean;
  externalReference?: string;
}

class PixModule {
  constructor(private httpClient: HttpClient) {}
  async createKey(type: PixKeyType): Promise<TypeAsaasPixKey> {
    return await this.httpClient.post("/accounts", { type });
  }

  async listKeys(params?: getPixParams): Promise<TypeAsaasPixKeyFindAll> {
    return await this.httpClient.get<TypeAsaasPixKeyFindAll>(
      "pix/addressKeys",
      { params }
    );
  }

  async getKeyById(id: string): Promise<TypeAsaasPixKey> {
    return await this.httpClient.get<TypeAsaasPixKey>(`pix/addressKeys/${id}`);
  }

  async deleteKey(id: string): Promise<void> {
    return await this.httpClient.delete(`pix/addressKeys/${id}`);
  }

  async createQrCode(data: CreateQRCodeParams): Promise<TypeAsaasPixStaticQrCode> {
    return await this.httpClient.post<TypeAsaasPixStaticQrCode>("pix/qrCode/static", { data });
  }

  async removeQrCode(id: string): Promise<void> {
    return await this.httpClient.delete(`pix/qrCode/static/${id}`);
  }
}

export { PixModule as Pix };
