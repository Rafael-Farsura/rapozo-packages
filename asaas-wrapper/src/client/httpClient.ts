import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseUrl: string, apiKey: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        access_token: apiKey,
      },

      timeout: 10000,
    });
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(
          "Ocorreu um erro na requisicao:",
          error.response?.data || error.message
        );
        throw error;
      }
    );
  }

  public async get<T>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.client.get<T>(url, {
      ...config,
      params,
    });
    return data;
  }

  public async post<T>(
    url: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.client.post<T>(url, body, config);
    return data;
  }

  public async put<T>(
    url: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const { data } = await this.client.put<T>(url, body, config);

    return data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.client.delete<T>(url, config);

    return data;
  }
}
