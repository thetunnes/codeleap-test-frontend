import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { TextArea } from "./Textarea";
import { Button } from "./Button";
import { useUserNameContext } from "../context/userNameContext";
import { useAddPostMutation, useGetPostsQuery } from "../features/api/apiSlice";
import { useToast } from "../utils/notify";

export function FormNewPost() {
  const { notifySuccess } = useToast()
  const { userName } = useUserNameContext();
  const [dataPost, setDataPost] = useState({
    title: "",
    content: "",
  });

  const [addNewPost] = useAddPostMutation();
  const { refetch } = useGetPostsQuery({});

  async function handleCreateNewPost(e: FormEvent) {
    e.preventDefault();

    addNewPost({ username: userName.username, ...dataPost })
      .unwrap()
      .then(() => {
        setDataPost({
          title: "",
          content: "",
        });
        notifySuccess("You added new post with success!")
        refetch();
      })
      .then((error) => {
        console.log(error);
      });
  }
  return (
    <form
      className="w-full border rounded-2xl p-6 border-gray900 flex flex-col gap-6"
      onSubmit={handleCreateNewPost}
    >
      <h2 className="font-bold text-xl text-black">What's on your mind?</h2>

      <Input
        id="title"
        label="Title"
        name="title"
        value={dataPost.title}
        placeholder="Hello World"
        onChange={({ target }) =>
          setDataPost((prev) => ({
            ...prev,
            title: target.value,
          }))
        }
      />

      <TextArea
        id="content"
        label="Content"
        name="content"
        placeholder="Content here"
        value={dataPost.content}
        onChange={({ target }) =>
          setDataPost((prev) => ({
            ...prev,
            content: target.value,
          }))
        }
      />

      <Button
        type="submit"
        disabled={!dataPost.title || !dataPost.content}
        color="blue"
      >
        Create
      </Button>
    </form>
  );
}
