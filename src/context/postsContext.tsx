import { createContext, ReactNode, useContext } from "react"

interface IPostsContext {

}

const PostsContext = createContext({} as IPostsContext)


interface IPostsProviderProps {
  children: ReactNode
}
export function PostsContextProvider({ children }: IPostsProviderProps) {

  return (
    <PostsContext.Provider value={}>
      {children}
    </PostsContext.Provider>
  )
}

export const usePostsContext = () => useContext(PostsContext)