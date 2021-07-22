import wretch, {Wretcher} from 'wretch';

export class ApiClient {
  private baseURL: string;
  constructor(config: ApiConfig) {
    this.baseURL = config.baseUrl;
  }

  private apiUrl = (endpoint: string) => `${this.baseURL}${endpoint}`;

  withEndpoint(endpoint: string): Wretcher {
    return wretch(this.apiUrl(endpoint));
  }
}

export interface ApiConfig {
  baseUrl: string;
}
