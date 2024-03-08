import { baseApi as api } from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: () => ({ url: `/posts` }),
    }),
    getPost: build.query<GetPostApiResponse, GetPostApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as flowrSpotApi };
export type GetPostsApiResponse = /** status 200 Successful response */ PostsList;
export type GetPostsApiArg = void;
export type GetPostApiResponse = /** status 200 Successful response */ Post;
export type GetPostApiArg = {
  /** The user id. */
  id: number;
};
export type Post = {
  id: number;
  userId: number;
  title: string;
  completed: string;
};
export type PostsList = Post[];
export const { useGetPostsQuery, useGetPostQuery } = injectedRtkApi;
