import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'

const Login = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect((): void => {
    setPage('login')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}
export default Login
