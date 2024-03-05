import { ZodiosHooks } from '@zodios/react';
import { createApiClient } from './generated-client';

export const zodiosClient = createApiClient('https://flowrspot-api.herokuapp.com');
export const apiHooks = new ZodiosHooks('myAPI', zodiosClient);
