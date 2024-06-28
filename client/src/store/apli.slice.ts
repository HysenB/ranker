import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT
    }`;
const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({}),
    tagTypes: [
        "User",
    ],
});
