import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'

const Home = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect((): void => {
    setPage('home')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}
export default Home
