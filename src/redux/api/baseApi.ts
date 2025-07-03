import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_DATABASE_URL}/api`}),
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: (queryString: string) =>`/books${queryString}`
        })
    }),
});



export const { useGetAllBooksQuery } = baseApi