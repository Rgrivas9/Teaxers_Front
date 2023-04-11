import { useEffect } from 'react'
import { PageContextType, usePageContext } from '../../context/page.Context'

const Docente_novel = (): JSX.Element => {
  const { page, setPage }: PageContextType = usePageContext()
  useEffect((): void => {
    setPage('docente novel')
  }, [])
  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}
export default Docente_novel
