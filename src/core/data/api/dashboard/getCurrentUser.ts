import {User} from '../dto';
import endpoints from '../endpoints';
import {ApiFactory} from '../factory';

export type GetCurrentUserApi = () => Promise<User>;

export const getCurrentUserApiFactory: ApiFactory<GetCurrentUserApi> =
  client => async () => {
    const res = client.withEndpoint(endpoints.currentUser).get();
    return res.json<User>();
  };
