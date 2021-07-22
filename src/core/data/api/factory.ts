import {ApiClient} from './client';

export type ApiFactory<T> = (client: ApiClient) => T;
