import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  posts: [],
  nextPage: '',
  prevPage: ''
}

export const postsSlide = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  }
})