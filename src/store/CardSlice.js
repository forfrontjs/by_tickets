import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "movies/applications/movies/",
    }),
    getSessions: builder.query({
      query: () => "movies/applications/sessions/",
    }),
  }),
});

export const { useGetMoviesQuery, useGetSessionsQuery } = moviesApi;
