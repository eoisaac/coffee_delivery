import { createContext, ReactNode } from 'react'

interface EnvContextType {
  imagesPath: string
}

interface EnvContextProviderProps {
  children: ReactNode
}

export const EnvContext = createContext({} as EnvContextType)

const imagesPath = import.meta.env.VITE_IMAGES_PATH

export const EnvContextProvider = ({ children }: EnvContextProviderProps) => {
  return (
    <EnvContext.Provider value={{ imagesPath }}>{children}</EnvContext.Provider>
  )
}
