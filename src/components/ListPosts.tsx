import { IPost, Post } from "./Post";
import { useGetPostsQuery } from "../features/api/apiSlice";
import { Button } from "./Button";

export function ListPosts() {
  const { data: posts, isLoading, isError, isSuccess } = useGetPostsQuery({});
  let postsRendered = <></>;

  if (isLoading) {
    postsRendered = <p>Loading posts...</p>;
  }

  console.log(posts)

  if (isSuccess) {
    postsRendered = (
      <>
        {posts.results.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </>
    );
  }

  return postsRendered
}
