export interface MockRequest {
  requestBody: string;
  url: string;
  requestHeaders: Record<string, string>;
  params: Record<string, string>;
  queryParams: Record<string, string>;
}

export interface MockResponse {
  status: number;
  headers?: Record<string, string>;
  body?: object;
}
export interface MockRoute {
  url: string;
  type: 'get' | 'post' | 'put' | 'delete' | 'patch';
  timing?: number;
  response: Record<string, MockResponse>;
  responseKeygen: (request: MockRequest) => string;
}

export const toUrl = (baseUrl: string, endPoint: string): string =>
  `${baseUrl}/${endPoint}`;
