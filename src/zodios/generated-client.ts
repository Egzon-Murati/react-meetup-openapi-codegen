import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const endpoints = makeApi([
  {
    method: 'get',
    path: '/api/v1/flowers',
    alias: 'getApiv1flowers',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/flowers',
    alias: 'postApiv1flowers',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/flowers/:flower_id/favorites',
    alias: 'postApiv1flowersFlower_idfavorites',
    requestFormat: 'json',
    parameters: [
      {
        name: 'flower_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/flowers/:flower_id/favorites/:id',
    alias: 'deleteApiv1flowersFlower_idfavoritesId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'flower_id',
        type: 'Path',
        schema: z.unknown(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/flowers/:id',
    alias: 'getApiv1flowersId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/flowers/:id/sightings',
    alias: 'getApiv1flowersIdsightings',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/flowers/favorites',
    alias: 'getApiv1flowersfavorites',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/flowers/random',
    alias: 'getApiv1flowersrandom',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/flowers/search',
    alias: 'getApiv1flowerssearch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'query',
        type: 'Query',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/sightings',
    alias: 'getApiv1sightings',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/sightings',
    alias: 'postApiv1sightings',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/sightings/:id',
    alias: 'getApiv1sightingsId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/v1/sightings/:id',
    alias: 'putApiv1sightingsId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/sightings/:id',
    alias: 'deleteApiv1sightingsId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/sightings/:sighting_id/comments',
    alias: 'getApiv1sightingsSighting_idcomments',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/sightings/:sighting_id/comments',
    alias: 'postApiv1sightingsSighting_idcomments',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/sightings/:sighting_id/comments/:id',
    alias: 'deleteApiv1sightingsSighting_idcommentsId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'delete',
    path: '/api/v1/sightings/:sighting_id/likes',
    alias: 'deleteApiv1sightingsSighting_idlikes',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/sightings/:sighting_id/likes',
    alias: 'getApiv1sightingsSighting_idlikes',
    requestFormat: 'json',
    parameters: [
      {
        name: 'page',
        type: 'Query',
        schema: z.unknown().optional(),
      },
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/sightings/:sighting_id/likes',
    alias: 'postApiv1sightingsSighting_idlikes',
    requestFormat: 'json',
    parameters: [
      {
        name: 'sighting_id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/:id',
    alias: 'getApiv1usersId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/:id/sightings',
    alias: 'getApiv1usersIdsightings',
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.unknown(),
      },
    ],
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/users/login',
    alias: 'postApiv1userslogin',
    requestFormat: 'json',
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `successful login`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/api/v1/users/me',
    alias: 'getApiv1usersme',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'put',
    path: '/api/v1/users/me',
    alias: 'putApiv1usersme',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'get',
    path: '/api/v1/users/me/refresh',
    alias: 'getApiv1usersmerefresh',
    requestFormat: 'json',
    response: z.void(),
  },
  {
    method: 'post',
    path: '/api/v1/users/register',
    alias: 'postApiv1usersregister',
    requestFormat: 'json',
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `failed registration`,
        schema: z.void(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
