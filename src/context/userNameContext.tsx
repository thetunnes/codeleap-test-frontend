import { createContext, ReactNode, useContext, useState } from 'react'

interface IContextProps {
  userName: {
    username: string,
  }
  handleSaveUserName: (username: string) => void
}

const UserNameContenxt = createContext({} as IContextProps)

interface IPropsProvider {
  children: ReactNode
}

export function UserNameContextProvider({ children }: IPropsProvider) {
  const userNameStorage = localStorage.getItem('user-codeleap')
  const [userName, setUserName] = useState(userNameStorage ? JSON.parse(userNameStorage) : { username: '' })

  function handleSaveUserName(text: string) {
    localStorage.setItem('user-codeleap', JSON.stringify({ username: text }))
    setUserName({ username: text })
  }

  return (
    <UserNameContenxt.Provider value={{ userName, handleSaveUserName }}>
      { children }
    </UserNameContenxt.Provider>
  )
}

export const useUserNameContext = () => useContext(UserNameContenxt)