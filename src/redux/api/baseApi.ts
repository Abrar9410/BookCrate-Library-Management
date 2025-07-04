import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_DATABASE_URL}/api`}),
    tagTypes: ['books', 'borrowSummary'],
    endpoints: (build) => ({
        getAllBooks: build.query({
            query: (queryString: string) =>`/books${queryString}`,
            providesTags: ['books']
        }),

        getSingleBook: build.query({
            query: (bookId: string) => `/books/${bookId}`
        }),

        createBook: build.mutation({
            query: (bookData) => ({
                url: '/books',
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ['books']
        }),

        editBook: build.mutation({
            query: ({_id, ...bookData}) => ({
                url: `/books/${_id}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ['books']
        }),

        deleteBook: build.mutation({
            query: (id: string) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['books']
        }),

        getBorrowSummary: build.query({
            query: (queryString: string) => `/borrow${queryString}`,
            providesTags: ['borrowSummary']
        }),

        createBorrow: build.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ['books', 'borrowSummary']
        })
    }),
});



export const {
    useGetAllBooksQuery,
    useGetSingleBookQuery,
    useCreateBookMutation,
    useEditBookMutation,
    useDeleteBookMutation,
    useGetBorrowSummaryQuery,
    useCreateBorrowMutation
} = baseApi