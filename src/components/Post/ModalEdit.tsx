import { useState } from "react";
import { IPost } from "."
import { useEditPostMutation, useGetPostsQuery } from "../../features/api/apiSlice";
import { useToast } from "../../utils/notify";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../Textarea";

interface IEditProps {
  postToEdit: IPost
  onClose: () => void
}

export function ModalEdit({ postToEdit, onClose }: IEditProps) {

  const { notifySuccess } = useToast()
  const [editPost] = useEditPostMutation();

  const [dataPost, setDataPost] = useState({
    title: '',
    content: ''
  })

  const { refetch } = useGetPostsQuery({});

  function handleEditThisPost() {
    editPost({ id: postToEdit.id, ...dataPost })
      .unwrap()
      .then(() => {
        refetch();
        onClose();
        setDataPost({
          title: '',
          content: ''
        })
        notifySuccess('You edited choosen post with success')
      })
      .then((error) => {
        console.log(error);
      });
  }

  return (
    <section className="w-full flex flex-col items-stretch gap-6">
      <h1 className="font-bold text-black text-2xl">
        Are you sure you want to delete this item?
      </h1>

      <Input
        id="title"
        label="Title"
        name="title"
        placeholder="Hello World"
        value={dataPost.title}
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


      <nav className="flex gap-4 self-end mt-6">
        <Button onClick={onClose}>Cancel</Button>
        <Button color="green" onClick={handleEditThisPost} disabled={!dataPost.title || !dataPost.content}>
          Save
        </Button>
      </nav>
    </section>
  );
}