import { NavigateFunction, useNavigate } from 'react-router-dom'

const Header = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  return (
    <header>
      <nav>
        <button onClick={(): void => navigate('/')}>home</button>
        <button onClick={(): void => navigate('/opositor')}>opositor</button>
        <button onClick={(): void => navigate('/docentenovel')}>
          docentenovel
        </button>
        <button onClick={(): void => navigate('/docenteexp')}>
          docenteexp
        </button>
        <button onClick={(): void => navigate('/libro')}>libro</button>
        <button onClick={(): void => navigate('/login')}>login</button>
      </nav>
    </header>
  )
}
export default Header
