import { apiSlice } from "../apli.slice";

export const schoolApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSchools: builder.query({
            query: () => ({
                url: `schools`,
                method: "GET",
            }),
            providesTags: ["School"],
        }),
        getSchoolById: builder.query({
            query: (id) => ({
                url: `schools/${id}`,
                method: "GET",
            }),
            providesTags: ["School"],
        }),
        createSchool: builder.mutation({
            query: (body) => {
                return {
                    url: `schools`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["School"],
        }),
        editSchool: builder.mutation({
            query: ({ id, body }) => {
                return {
                    url: `schools/${id}`,
                    method: "PATCH",
                    body
                };
            },
            invalidatesTags: ["School"],
        }),
        deleteSchool: builder.mutation({
            query: (id) => {
                return {
                    url: `schools/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["School"],
        }),
    })
});

export const {
    useGetAllSchoolsQuery,
    useCreateSchoolMutation,
    useDeleteSchoolMutation,
    useEditSchoolMutation,
    useGetSchoolByIdQuery
} = schoolApi