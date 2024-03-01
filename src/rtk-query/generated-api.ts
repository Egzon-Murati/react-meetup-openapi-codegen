import { baseApi as api } from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiV1FlowersFavorites: build.query<
      GetApiV1FlowersFavoritesApiResponse,
      GetApiV1FlowersFavoritesApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/flowers/favorites`, params: { page: queryArg.page } }),
    }),
    postApiV1FlowersByFlowerIdFavorites: build.mutation<
      PostApiV1FlowersByFlowerIdFavoritesApiResponse,
      PostApiV1FlowersByFlowerIdFavoritesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/flowers/${queryArg.flowerId}/favorites`,
        method: 'POST',
      }),
    }),
    deleteApiV1FlowersByFlowerIdFavoritesAndId: build.mutation<
      DeleteApiV1FlowersByFlowerIdFavoritesAndIdApiResponse,
      DeleteApiV1FlowersByFlowerIdFavoritesAndIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/flowers/${queryArg.flowerId}/favorites/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getApiV1FlowersByIdSightings: build.query<
      GetApiV1FlowersByIdSightingsApiResponse,
      GetApiV1FlowersByIdSightingsApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/flowers/${queryArg.id}/sightings` }),
    }),
    getApiV1Flowers: build.query<GetApiV1FlowersApiResponse, GetApiV1FlowersApiArg>({
      query: (queryArg) => ({ url: `/api/v1/flowers`, params: { page: queryArg.page } }),
    }),
    postApiV1Flowers: build.mutation<PostApiV1FlowersApiResponse, PostApiV1FlowersApiArg>({
      query: (queryArg) => ({ url: `/api/v1/flowers`, method: 'POST', body: queryArg.body }),
    }),
    getApiV1FlowersRandom: build.query<
      GetApiV1FlowersRandomApiResponse,
      GetApiV1FlowersRandomApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/flowers/random`, params: { page: queryArg.page } }),
    }),
    getApiV1FlowersSearch: build.query<
      GetApiV1FlowersSearchApiResponse,
      GetApiV1FlowersSearchApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/flowers/search`, params: { query: queryArg.query } }),
    }),
    getApiV1FlowersById: build.query<GetApiV1FlowersByIdApiResponse, GetApiV1FlowersByIdApiArg>({
      query: (queryArg) => ({ url: `/api/v1/flowers/${queryArg.id}` }),
    }),
    postApiV1UsersRegister: build.mutation<
      PostApiV1UsersRegisterApiResponse,
      PostApiV1UsersRegisterApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/users/register`, method: 'POST', body: queryArg.body }),
    }),
    postApiV1UsersLogin: build.mutation<PostApiV1UsersLoginApiResponse, PostApiV1UsersLoginApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/login`, method: 'POST', body: queryArg.body }),
    }),
    deleteApiV1SightingsBySightingIdCommentsAndId: build.mutation<
      DeleteApiV1SightingsBySightingIdCommentsAndIdApiResponse,
      DeleteApiV1SightingsBySightingIdCommentsAndIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/comments/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    getApiV1SightingsBySightingIdComments: build.query<
      GetApiV1SightingsBySightingIdCommentsApiResponse,
      GetApiV1SightingsBySightingIdCommentsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/comments`,
        params: { page: queryArg.page },
      }),
    }),
    postApiV1SightingsBySightingIdComments: build.mutation<
      PostApiV1SightingsBySightingIdCommentsApiResponse,
      PostApiV1SightingsBySightingIdCommentsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/comments`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    deleteApiV1SightingsBySightingIdLikes: build.mutation<
      DeleteApiV1SightingsBySightingIdLikesApiResponse,
      DeleteApiV1SightingsBySightingIdLikesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/likes`,
        method: 'DELETE',
      }),
    }),
    getApiV1SightingsBySightingIdLikes: build.query<
      GetApiV1SightingsBySightingIdLikesApiResponse,
      GetApiV1SightingsBySightingIdLikesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/likes`,
        params: { page: queryArg.page },
      }),
    }),
    postApiV1SightingsBySightingIdLikes: build.mutation<
      PostApiV1SightingsBySightingIdLikesApiResponse,
      PostApiV1SightingsBySightingIdLikesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.sightingId}/likes`,
        method: 'POST',
      }),
    }),
    getApiV1Sightings: build.query<GetApiV1SightingsApiResponse, GetApiV1SightingsApiArg>({
      query: (queryArg) => ({ url: `/api/v1/sightings`, params: { page: queryArg.page } }),
    }),
    postApiV1Sightings: build.mutation<PostApiV1SightingsApiResponse, PostApiV1SightingsApiArg>({
      query: (queryArg) => ({ url: `/api/v1/sightings`, method: 'POST', body: queryArg.body }),
    }),
    getApiV1SightingsById: build.query<
      GetApiV1SightingsByIdApiResponse,
      GetApiV1SightingsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/sightings/${queryArg.id}` }),
    }),
    putApiV1SightingsById: build.mutation<
      PutApiV1SightingsByIdApiResponse,
      PutApiV1SightingsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sightings/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    deleteApiV1SightingsById: build.mutation<
      DeleteApiV1SightingsByIdApiResponse,
      DeleteApiV1SightingsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/sightings/${queryArg.id}`, method: 'DELETE' }),
    }),
    getApiV1UsersByIdSightings: build.query<
      GetApiV1UsersByIdSightingsApiResponse,
      GetApiV1UsersByIdSightingsApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/users/${queryArg.id}/sightings` }),
    }),
    getApiV1UsersMe: build.query<GetApiV1UsersMeApiResponse, GetApiV1UsersMeApiArg>({
      query: () => ({ url: `/api/v1/users/me` }),
    }),
    putApiV1UsersMe: build.mutation<PutApiV1UsersMeApiResponse, PutApiV1UsersMeApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/me`, method: 'PUT', body: queryArg.body }),
    }),
    getApiV1UsersMeRefresh: build.query<
      GetApiV1UsersMeRefreshApiResponse,
      GetApiV1UsersMeRefreshApiArg
    >({
      query: () => ({ url: `/api/v1/users/me/refresh` }),
    }),
    getApiV1UsersById: build.query<GetApiV1UsersByIdApiResponse, GetApiV1UsersByIdApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as flowrSpotApi };
export type GetApiV1FlowersFavoritesApiResponse =
  /** status 200 get list of favorites */ FavoriteList;
export type GetApiV1FlowersFavoritesApiArg = {
  page?: number;
};
export type PostApiV1FlowersByFlowerIdFavoritesApiResponse =
  /** status 200 mark flower as favorite */ Favorite;
export type PostApiV1FlowersByFlowerIdFavoritesApiArg = {
  flowerId: number;
};
export type DeleteApiV1FlowersByFlowerIdFavoritesAndIdApiResponse =
  /** status 200 flower removed from favorites */ Favorite;
export type DeleteApiV1FlowersByFlowerIdFavoritesAndIdApiArg = {
  flowerId: number;
  id: number;
};
export type GetApiV1FlowersByIdSightingsApiResponse =
  /** status 200 get list of sightings */ SightingList;
export type GetApiV1FlowersByIdSightingsApiArg = {
  id: number;
};
export type GetApiV1FlowersApiResponse =
  /** status 200 get list of flowers with pagination */ FlowerList;
export type GetApiV1FlowersApiArg = {
  page?: number;
};
export type PostApiV1FlowersApiResponse = /** status 200 successful */ Flower;
export type PostApiV1FlowersApiArg = {
  body: {
    name?: string;
    latin_name?: string;
    description?: string;
    features?: string;
    profile_picture?: Blob;
  };
};
export type GetApiV1FlowersRandomApiResponse =
  /** status 200 get list of random flowers with pagination */ FlowerList;
export type GetApiV1FlowersRandomApiArg = {
  page?: number;
};
export type GetApiV1FlowersSearchApiResponse = /** status 200 get list of flowers */ FlowerList;
export type GetApiV1FlowersSearchApiArg = {
  query: string;
};
export type GetApiV1FlowersByIdApiResponse = /** status 200 returns flower info */ Flower;
export type GetApiV1FlowersByIdApiArg = {
  id: number;
};
export type PostApiV1UsersRegisterApiResponse = /** status 200 successful registration */ AuthToken;
export type PostApiV1UsersRegisterApiArg = {
  body: {
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
  };
};
export type PostApiV1UsersLoginApiResponse = /** status 200 successful login */ AuthToken;
export type PostApiV1UsersLoginApiArg = {
  body: {
    email?: string;
    password?: string;
  };
};
export type DeleteApiV1SightingsBySightingIdCommentsAndIdApiResponse =
  /** status 200 remove a comment from a sighting */ Comment;
export type DeleteApiV1SightingsBySightingIdCommentsAndIdApiArg = {
  sightingId: number;
  id: number;
};
export type GetApiV1SightingsBySightingIdCommentsApiResponse =
  /** status 200 get sighting comments */ CommentList;
export type GetApiV1SightingsBySightingIdCommentsApiArg = {
  page?: number;
  sightingId: number;
};
export type PostApiV1SightingsBySightingIdCommentsApiResponse =
  /** status 200 create a comment for sighting */ Comment;
export type PostApiV1SightingsBySightingIdCommentsApiArg = {
  sightingId: number;
  body: {
    content?: string;
  };
};
export type DeleteApiV1SightingsBySightingIdLikesApiResponse =
  /** status 200 remove a like from a sighting */ Like;
export type DeleteApiV1SightingsBySightingIdLikesApiArg = {
  sightingId: number;
};
export type GetApiV1SightingsBySightingIdLikesApiResponse =
  /** status 200 get sighting likes */ LikeList;
export type GetApiV1SightingsBySightingIdLikesApiArg = {
  page?: number;
  sightingId: number;
};
export type PostApiV1SightingsBySightingIdLikesApiResponse =
  /** status 200 create a like for sighting */ Like;
export type PostApiV1SightingsBySightingIdLikesApiArg = {
  sightingId: number;
};
export type GetApiV1SightingsApiResponse =
  /** status 200 get list of sightings with pagination */ SightingList;
export type GetApiV1SightingsApiArg = {
  page?: number;
};
export type PostApiV1SightingsApiResponse = /** status 200 successful */ Sighting;
export type PostApiV1SightingsApiArg = {
  body: {
    flower_id?: number;
    name?: string;
    description?: string;
    latitude?: number;
    longitude?: number;
    picture?: Blob;
  };
};
export type GetApiV1SightingsByIdApiResponse = /** status 200 returns sighting info */ Sighting;
export type GetApiV1SightingsByIdApiArg = {
  id: number;
};
export type PutApiV1SightingsByIdApiResponse =
  /** status 200 returns updated sighting info */ Sighting;
export type PutApiV1SightingsByIdApiArg = {
  id: number;
  body: {
    flower_id?: number | null;
    name?: string | null;
    description?: string | null;
    latitude?: number | null;
    longitude?: number | null;
  };
};
export type DeleteApiV1SightingsByIdApiResponse = /** status 200 deletes sighting */ Sighting;
export type DeleteApiV1SightingsByIdApiArg = {
  id: number;
};
export type GetApiV1UsersByIdSightingsApiResponse =
  /** status 200 get list of sightings */ SightingList;
export type GetApiV1UsersByIdSightingsApiArg = {
  id: number;
};
export type GetApiV1UsersMeApiResponse = /** status 200 get info about me */ User;
export type GetApiV1UsersMeApiArg = void;
export type PutApiV1UsersMeApiResponse = /** status 200 get info about me */ User;
export type PutApiV1UsersMeApiArg = {
  body: {
    first_name?: string | null;
    last_name?: string | null;
    password?: string | null;
    password_confirmation?: string | null;
    profile_picture?: string | null;
    date_of_birth?: string | null;
  };
};
export type GetApiV1UsersMeRefreshApiResponse = /** status 200 returns new jwt token */ AuthToken;
export type GetApiV1UsersMeRefreshApiArg = void;
export type GetApiV1UsersByIdApiResponse = /** status 200 returns other users info */ User;
export type GetApiV1UsersByIdApiArg = {
  id: number;
};
export type Flower = {
  id?: number;
  name?: string;
  latin_name?: string;
  sightings?: number;
  profile_picture?: string;
  favorite?: boolean;
};
export type Favorite = {
  id?: number;
  user_id?: number;
  flower?: Flower;
};
export type Pagination = {
  current_page?: number;
  prev_page?: number;
  next_page?: number;
  total_pages?: number;
};
export type FavoriteList = {
  sightings?: Favorite[];
  meta?: Pagination;
};
export type Sighting = {
  id?: number;
  flower_id?: number | null;
  name?: string | null;
  description?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};
export type SightingList = {
  sightings?: Sighting[];
  meta?: Pagination;
};
export type FlowerList = {
  flowers?: Flower[];
  meta?: Pagination;
};
export type AuthToken = {
  auth_token?: string;
};
export type AuthTokenError = {
  auth_token?: string | null;
  error?: string;
};
export type Comment = {
  id?: number;
  user_id?: number;
  user_full_name?: string;
  sighting_id?: number;
  content?: string;
};
export type CommentList = {
  comments?: Comment[];
  meta?: Pagination;
};
export type Like = {
  id?: number;
  user_id?: number;
  user_full_name?: string;
  sighting_id?: number;
};
export type LikeList = {
  likes?: Like[];
  meta?: Pagination;
};
export type User = {
  user?: {
    id?: number;
    first_name?: string;
    last_name?: string;
  };
};
export const {
  useGetApiV1FlowersFavoritesQuery,
  usePostApiV1FlowersByFlowerIdFavoritesMutation,
  useDeleteApiV1FlowersByFlowerIdFavoritesAndIdMutation,
  useGetApiV1FlowersByIdSightingsQuery,
  useGetApiV1FlowersQuery,
  usePostApiV1FlowersMutation,
  useGetApiV1FlowersRandomQuery,
  useGetApiV1FlowersSearchQuery,
  useGetApiV1FlowersByIdQuery,
  usePostApiV1UsersRegisterMutation,
  usePostApiV1UsersLoginMutation,
  useDeleteApiV1SightingsBySightingIdCommentsAndIdMutation,
  useGetApiV1SightingsBySightingIdCommentsQuery,
  usePostApiV1SightingsBySightingIdCommentsMutation,
  useDeleteApiV1SightingsBySightingIdLikesMutation,
  useGetApiV1SightingsBySightingIdLikesQuery,
  usePostApiV1SightingsBySightingIdLikesMutation,
  useGetApiV1SightingsQuery,
  usePostApiV1SightingsMutation,
  useGetApiV1SightingsByIdQuery,
  usePutApiV1SightingsByIdMutation,
  useDeleteApiV1SightingsByIdMutation,
  useGetApiV1UsersByIdSightingsQuery,
  useGetApiV1UsersMeQuery,
  usePutApiV1UsersMeMutation,
  useGetApiV1UsersMeRefreshQuery,
  useGetApiV1UsersByIdQuery,
} = injectedRtkApi;
