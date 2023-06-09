import { createContext, useState } from 'react'
import { useContext } from 'react'

export type Props = {
  children: React.ReactNode
}
export type PageContextType = {
  page: string
  setPage: (value: string) => void
}
export const PageContext = createContext<PageContextType>({
  page: 'home',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPage: () => {},
})
export const usePageContext = (): PageContextType => useContext(PageContext)
export const PageContextProvider = ({ children }: Props): JSX.Element => {
  const [page, setPage] = useState('home')
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  )
}
