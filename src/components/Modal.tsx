import { ReactElement } from "react";
import { ModalDelete } from "./Post/ModalDelete";
import { ModalEdit } from "./Post/ModalEdit";
import { IPost } from "./Post";

interface IModalProps {
  type: 'delete' | 'edit'
  onClose: () => void;
  post: IPost
}

export function Modal({ type, onClose, post }: IModalProps) {
  if (!type) {
    onClose()
  }
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 h-full bg-gray700/80"
        onClick={onClose}
      />
      <div className="w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto max-w-[60vw] z-10 w-full p-6 bg-white rounded-2xl">
          {type === 'delete' && <ModalDelete postToDelete={post} onClose={onClose} />}
          {type === 'edit' && <ModalEdit postToEdit={post} onClose={onClose} />}
        </div>
      </div>
    </>
  );
}
