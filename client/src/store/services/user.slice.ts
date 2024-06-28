import { apiSlice } from "../apli.slice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ({ name }) => ({
                url: `users`,
                params: { firstName: name },
                method: "GET",
            }),
            providesTags: ["User"],
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `users/${id}`,
                method: "GET",
            }),
            providesTags: ["User"],
        }),
        createUser: builder.mutation({
            query: (body) => {
                return {
                    url: `users`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["User"],
        }),
        editUser: builder.mutation({
            query: ({ id, body }) => {
                return {
                    url: `users/${id}`,
                    method: "PATCH",
                    body
                };
            },
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation({
            query: (id) => {
                return {
                    url: `users/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["User"],
        }),
    })
});

export const {
    useGetAllUsersQuery,
    useCreateUserMutation,
    useDeleteUserMutation,
    useEditUserMutation,
    useGetUserByIdQuery
} = userApi