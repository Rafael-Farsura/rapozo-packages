import { HttpClient } from "../client";
import { sendDocumentsParams } from "../types/document";

class AccountDocumentModule {
  constructor(private httpClient: HttpClient) {}

  async checkPendingDocuments(): Promise<any> {
    return await this.httpClient.get("/myAccount/documents");
  }

  async sendDocuments(data: sendDocumentsParams): Promise<any> {
    return await this.httpClient.post(`myAccount/documents/${data.id}`, {
      ...data,
    });
  }

  async viewDocument(id: string): Promise<any> {
    return await this.httpClient.get(`myAccount/documents/files/${id}`);
  }

  async updateDocument(data: sendDocumentsParams): Promise<any> {
    return await this.httpClient.post(`/myAccount/documents/${data.id}`, {
      ...data,
    });
  }

  async removeDocument(id: string): Promise<any> {
    return await this.httpClient.delete(`/myAccount/documents/${id}`);
  }
}

export { AccountDocumentModule as AccountDocument };
