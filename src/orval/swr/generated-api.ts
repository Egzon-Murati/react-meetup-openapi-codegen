/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * JSON Placeholder API
 * See https://jsonplaceholder.typicode.com/
 * OpenAPI spec version: 1.0.0
 */
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as axios from 'axios';
import type { Key, SWRConfiguration } from 'swr';
import useSwr from 'swr';
import type { Post, PostsList } from './generated-api.schemas';

/**
 * Returns all posts
 */
export const getPosts = (options?: AxiosRequestConfig): Promise<AxiosResponse<PostsList>> => {
  return axios.default.get(`https://flowrspot-api.herokuapp.com/posts`, options);
};

export const getGetPostsKey = () => [`https://flowrspot-api.herokuapp.com/posts`] as const;

export type GetPostsQueryResult = NonNullable<Awaited<ReturnType<typeof getPosts>>>;
export type GetPostsQueryError = AxiosError<unknown>;

export const useGetPosts = <TError = AxiosError<unknown>>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof getPosts>>, TError> & {
    swrKey?: Key;
    enabled?: boolean;
  };
  axios?: AxiosRequestConfig;
}) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetPostsKey() : null));
  const swrFn = () => getPosts(axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, {
    ...swrOptions,
  });

  return {
    swrKey,
    ...query,
  };
};

/**
 * Returns a post by id
 */
export const getPost = (id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Post>> => {
  return axios.default.get(`https://flowrspot-api.herokuapp.com/posts/${id}`, options);
};

export const getGetPostKey = (id: number) =>
  [`https://flowrspot-api.herokuapp.com/posts/${id}`] as const;

export type GetPostQueryResult = NonNullable<Awaited<ReturnType<typeof getPost>>>;
export type GetPostQueryError = AxiosError<void>;

export const useGetPost = <TError = AxiosError<void>>(
  id: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getPost>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
    axios?: AxiosRequestConfig;
  },
) => {
  const { swr: swrOptions, axios: axiosOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!id;
  const swrKey = swrOptions?.swrKey ?? (() => (isEnabled ? getGetPostKey(id) : null));
  const swrFn = () => getPost(id, axiosOptions);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, {
    ...swrOptions,
  });

  return {
    swrKey,
    ...query,
  };
};
