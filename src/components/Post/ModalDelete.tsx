import { IPost } from ".";
import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../../features/api/apiSlice";
import { useToast } from "../../utils/notify";
import { Button } from "../Button";

interface IDeleteProps {
  postToDelete: IPost;
  onClose: () => void;
}
export function ModalDelete({ postToDelete, onClose }: IDeleteProps) {
  const { notifySuccess } = useToast()
  const [deletePost] = useDeletePostMutation();

  const { refetch } = useGetPostsQuery({});

  function handleDeleteThisPost() {
    deletePost(postToDelete.id)
      .unwrap()
      .then(() => {
        refetch();
        onClose()
        notifySuccess('You deleted a post with success')
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

      <nav className="flex gap-4 self-end mt-6">
        <Button onClick={onClose}>Cancel</Button>
        <Button color="red" onClick={handleDeleteThisPost}>
          Delete
        </Button>
      </nav>
    </section>
  );
}
