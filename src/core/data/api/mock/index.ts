import {Server} from 'miragejs';
import {aspireApiConfig} from '../config';
import {createMockServer} from './server';

let server: Server;
export const initMockServer = () => {
  if (!!server) {
    server.shutdown();
  }

  server = createMockServer({
    aspireApiConfig,
  });
  console.log(
    '%cMirage Server started 🚀',
    'color:green; font-weight: bold; font-size: 18px;',
  );
};
