import { useEffect, useState } from "react";
import { FormNewPost } from "../components/FormNewPost";
import { ListPosts } from "../components/ListPosts";
import { useUserNameContext } from "../context/userNameContext";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { IPost } from "../components/Post";

export function Home() {
  const navigate = useNavigate();
  const { userName } = useUserNameContext();

  useEffect(() => {
    if (!userName.username) {
      navigate("/signup");
    }
  }, []);

  return (
    <main className="w-full min-h-screen max-w-[800px]">
      <header className="bg-blueLight py-7 px-9">
        <h1 className="text-white font-sans font-bold text-xl">
          CodeLeap Network
        </h1>
      </header>

      <section className="w-full p-6 bg-white flex flex-col items-stretch gap-6">
        <FormNewPost />

        <ListPosts />
      </section>
    </main>
  );
}
