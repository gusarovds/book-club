import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { PostsStore, Post } from '@/types/state'
import stateConst from '@/constants/state'

export interface AuthState {
  authState: boolean;
}
const years = Object.keys(stateConst).map(Number)

const initialState: PostsStore = {
  posts: stateConst,
  currentPosts: stateConst[Math.max(...years).toString()].posts ?? [],
  years
};

// Actual Slice
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setCurrentYearPosts(state, action) {
      state.currentPosts = state.posts[action.payload].posts ?? [];
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setCurrentYearPosts } = postsSlice.actions;

export const selectCurrentPosts = (state: AppState) => state.posts.currentPosts;
export const selectYears = (state: AppState) => state.posts.years;

export default postsSlice.reducer;