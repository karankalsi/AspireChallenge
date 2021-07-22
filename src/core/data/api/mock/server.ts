// tslint:disable:no-implicit-dependencies
import {createServer, Response, Server} from 'miragejs';
import {MockRoute} from './utils';
import {ApiConfig} from '../client';
import dashboardRoutes from './dashboard/_routes';

export interface MockServerConfig {
  aspireApiConfig: ApiConfig;
}
const createRoutes = (cfg: MockServerConfig): Record<string, MockRoute> => {
  const routes = {
    ...dashboardRoutes(cfg),
  };

  return routes;
};

export function createMockServer(
  lsaMockServerConfig: MockServerConfig,
): Server {
  return createServer({
    routes(this: Server): void {
      const mockRoutes = createRoutes(lsaMockServerConfig);
      Object.keys(mockRoutes).forEach(key => {
        const {
          url,
          type,
          timing,
          response: responseMap,
          responseKeygen,
        } = mockRoutes[key];
        this[type](
          url,
          (_, request) => {
            const {status, headers, body} =
              responseMap[responseKeygen(request)];
            return new Response(status, headers, body);
          },
          {
            timing,
          },
        );
      });
    },
  });
}
