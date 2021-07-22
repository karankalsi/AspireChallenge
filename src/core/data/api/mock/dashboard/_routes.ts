import {MockRoute, toUrl} from '../utils';
import endpoints from '../../endpoints';
import {MockServerConfig} from '../server';
import currentUser200 from './stub/currentUser200.json';

export default (
  mockServerConfig: MockServerConfig,
): Record<string, MockRoute> => {
  const {baseUrl} = mockServerConfig.aspireApiConfig;
  return {
    GetCurrentUser: {
      url: toUrl(baseUrl, endpoints.currentUser),
      type: 'get',
      timing: 3000,
      response: {
        DEFAULT: {
          status: 200,
          body: currentUser200,
        },
      },
      responseKeygen: () => 'DEFAULT',
    },
    SearchProductSuggestion: {
      url: toUrl(baseUrl, endpoints.updateWeeklyLimit),
      type: 'patch',
      timing: 3000,
      response: {
        DEFAULT: {
          status: 200,
        },
      },
      responseKeygen: () => 'DEFAULT',
    },
  };
};
