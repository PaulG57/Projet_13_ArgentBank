import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3001/api/v1";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    getUserProfile: builder.query({
      query: (token) => ({
        url: "/user/profile",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    updateUserProfile: builder.mutation({
      query: ({ token, firstName, lastName }) => ({
        url: "/user/profile",
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: { firstName, lastName },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = authApi;
export default authApi;