import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { PostsStore, Post } from '@/types/state'
import { stateDev, stateProd } from '@/constants/state'

const stateConst = process.env.NEXT_PUBLIC_ENV === 'dev' ? stateDev : stateProd
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
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        // @ts-ignore:next-line
        ...action.payload.posts,
      };
    })
  },
});

export const { setCurrentYearPosts } = postsSlice.actions;

export const selectCurrentPosts = (state: AppState) => state.posts.currentPosts as Post[];
export const selectYears = (state: AppState) => state.posts.years as number[];

export default postsSlice.reducer;