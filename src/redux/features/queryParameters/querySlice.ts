import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "",
    sortBy: "",
    sort: "",
    skip: 0,
    limit: 0,
    borrowSortBy: "",
    borrowSort: "",
    borrowSkip: 0,
    borrowLimit: 0,
}

const querySlice = createSlice({
    name: "queries",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setSkip: (state, action) => {
            state.skip = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setBorrowSortBy: (state, action) => {
            state.borrowSortBy = action.payload;
        },
        setBorrowSort: (state, action) => {
            state.borrowSort = action.payload;
        },
        setBorrowSkip: (state, action) => {
            state.borrowSkip = action.payload;
        },
        setBorrowLimit: (state, action) => {
            state.borrowLimit = action.payload;
        },
    }
});

export default querySlice.reducer;