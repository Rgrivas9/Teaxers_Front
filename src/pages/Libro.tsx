import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../context/page.Context'
import { Params, useParams } from 'react-router-dom'

const Libro = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  const { title }: Readonly<Params<string>> = useParams()
  useEffect((): void => {
    setPage('libro')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
      <h2>{title}</h2>
    </div>
  )
}
export default Libro
