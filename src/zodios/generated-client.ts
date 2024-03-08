import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const Post = z
  .object({
    id: z.number().int(),
    userId: z.number().int(),
    title: z.string(),
    completed: z.string(),
  })
  .passthrough();
const PostsList = z.array(Post);

export const schemas = {
  Post,
  PostsList,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/posts',
    alias: 'getPosts',
    description: `Returns all posts`,
    requestFormat: 'json',
    response: z.array(Post),
  },
  {
    method: 'get',
    path: '/posts/:id',
    alias: 'getPost',
    description: `Returns a post by id`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: Post,
    errors: [
      {
        status: 404,
        description: `Post not found`,
        schema: z.void(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
