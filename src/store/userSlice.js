import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/auth/" }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (userData) => ({
        url: "/jwt/create/",
        method: "POST",
        body: userData,
      }),
      keepUnusedDataFor: Infinity,
    }),
    registerUser: build.mutation({
      query: (userData) => ({
        url: "users/",
        method: "POST",
        body: userData,
      }),
      keepUnusedDataFor: Infinity,
    }),
    activateUser: build.mutation({
      query: ({ uid, token }) => ({
        url: "users/activation/",
        method: "POST",
        body: { uid, token },
      }),
      keepUnusedDataFor: Infinity,
    }),
    resetPassword: build.mutation({
      query: (email) => ({
        url: "users/reset_password/",
        method: "POST",
        body: email,
      }),
    }),
    resetPasswordConfirm: build.mutation({
      query: ({ uid, token, new_password }) => ({
        url: "users/reset_password_confirm/",
        method: "POST",
        body: { uid, token, new_password },
      }),
      keepUnusedDataFor: Infinity,
    }),
   
  }),
});

export const {useLoginUserMutation, useRegisterUserMutation, useActivateUserMutation, useResetPasswordMutation, useResetPasswordConfirmMutation} = userSlice


