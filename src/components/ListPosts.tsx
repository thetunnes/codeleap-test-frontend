import { IPost, Post } from "./Post";
import { useGetPostsQuery } from "../features/api/apiSlice";


export function ListPosts() {

  const { data: posts, isLoading, isError, isSuccess } = useGetPostsQuery({})

  if (isLoading) {
    return <p>Loading posts...</p>
  }

  if (isSuccess) {
    return (
      posts.results.map((post: IPost) => <Post key={post.id} post={post} />)
    )
  }
  // return (
  //   <>
  //     {isLoading ? (
  //       <p>Loading posts...</p>
  //     ) : list?.posts.length ? (
  //       list.posts.map((post) => <Post key={post.id} post={post} />)
  //     ) : (
  //       <p>Not found Posts.</p>
  //     )}
  //   </>
  // );
}
