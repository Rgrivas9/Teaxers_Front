import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../../context/page.Context'

const Opositor = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect((): void => {
    setPage('opositor')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}
export default Opositor
