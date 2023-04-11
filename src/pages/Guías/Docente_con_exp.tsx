import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../../context/page.Context'

const Docente_con_exp = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect((): void => {
    setPage('docente exp')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}
export default Docente_con_exp
