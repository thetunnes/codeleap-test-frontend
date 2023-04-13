import { timeSince } from "../../utils/formatDate";
import { BiEdit } from "react-icons/bi"
import { MdDeleteForever } from "react-icons/md"
import { useUserNameContext } from "../../context/userNameContext";
import { useState } from "react";
import { Modal } from "../Modal";
import { ModalDelete } from "./ModalDelete";
export interface IPost {
  content: string
  created_datetime: string
  id: number;
  title: string
  username: string
}

interface IPostProps {
  post: IPost
}

export function Post({ post }: IPostProps) {
  const { userName } = useUserNameContext()
  const { id, title, content, username, created_datetime } = post

  const [typeModal, setTypeModal] = useState<'delete' | 'edit' | ''>('');

  function openModal(type: 'delete' | 'edit') {
    setTypeModal(type)
  }

  return (
    <div className=" rounded-2xl">
      <header className="w-full bg-blueLight p-6 flex items-center justify-between rounded-t-2xl">
        <h3 className="text-xl text-white font-bold">{title}</h3>
        {userName.username === username && <nav className="flex items-center gap-8">
          <MdDeleteForever size={28} color="white" onClick={() => openModal('delete')} className="cursor-pointer hover:brightness-90 transition-all" />
          <BiEdit size={28} color="white" onClick={() => openModal('edit')} className="cursor-pointer hover:brightness-90 transition-all" />
        </nav>}
      </header>

      <section className="w-full border-b border-l border-r rounded-b-2xl border-gray900 p-6 flex flex-col items-stretch gap-4">
        <div className="w-full flex items-center justify-between">
          <span className="text-gray700 text-lg font-bold">@{username}</span>
          <span className="text-gray700 text-lg font-normal">{timeSince(created_datetime)}</span>
        </div>

        <p className="text-black text-lg">{content}</p>
      </section>

      {!!typeModal ? (
        <Modal
          type={typeModal}
          onClose={() => setTypeModal('')}
          post={post}
        />
      ) : null}
    </div>
  );
}
