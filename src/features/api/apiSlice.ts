import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev.codeleap.co.uk/careers',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  tagTypes: ['Post', 'Get', 'Patch', 'Delete'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (url) => ({
        url: url ?? '/',
        method: 'GET',
      })
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      })
    }),
    editPost: builder.mutation({
      query: ({id: idPost, ...body}) => ({
        url: `/${idPost}/`,
        method: 'PATCH',
        body
      })
    }),
    deletePost: builder.mutation({
      query: (idPost) => ({
        url: `/${idPost}/`,
        method: 'DELETE',
      })
    })
  })
})
export const { useGetPostsQuery, useAddPostMutation, useEditPostMutation, useDeletePostMutation } = apiSlice