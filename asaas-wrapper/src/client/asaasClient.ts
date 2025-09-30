import {
  SubAccounts,
  AccountDocument,
  Client,
  FiscalInvoice,
  Pix,
  PixTransaction,
  Payment,
  Anticipation,
  Transfers
} from "../modules";
import { Subscriptions } from "../modules/subscriptionsModule";

import { HttpClient } from "./httpClient";

export class AsaasClient {
  public subAccount: SubAccounts;
  public accountDocument: AccountDocument;
  public client: Client;
  public fiscalInvoice: FiscalInvoice;
  public pix: Pix;
  public pixTransaction: PixTransaction;
  public payment: Payment;
  public transfer: Transfers;
  public httpClient: HttpClient;
  public anticipation: Anticipation;
  public subscriptions: Subscriptions;

  constructor(apiKey: string, sandbox: boolean = false) {
    const baseURL = sandbox
      ? "https://api-sandbox.asaas.com/v3"
      : "https://api.asaas.com/v3";

    if (!apiKey) {
      throw new Error("API Key is required");
    }

    this.httpClient = new HttpClient(baseURL, apiKey);
    this.subAccount = new SubAccounts(this.httpClient);
    this.accountDocument = new AccountDocument(this.httpClient);
    this.client = new Client(this.httpClient);
    this.fiscalInvoice = new FiscalInvoice(this.httpClient);
    this.pix = new Pix(this.httpClient);
    this.pixTransaction = new PixTransaction(this.httpClient);
    this.payment = new Payment(this.httpClient);
    this.anticipation = new Anticipation(this.httpClient);
    this.subscriptions = new Subscriptions(this.httpClient);
    this.transfer = new Transfers(this.httpClient);
  }
}
