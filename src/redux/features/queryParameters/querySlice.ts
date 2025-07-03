import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "",
    sortBy: "",
    sort: "",
    skip: 0,
    limit: 0
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
    }
});

export default querySlice.reducer;