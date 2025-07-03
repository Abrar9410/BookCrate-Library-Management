import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-with-mongoose.vercel.app/api"}),
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: (queryString: string) =>`/books${queryString}`
        })
    }),
});



export const { useGetAllBooksQuery } = baseApi