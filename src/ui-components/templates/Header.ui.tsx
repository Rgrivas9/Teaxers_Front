import { NavigateFunction, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Padding } from '../../styles/Spacing'
import HeaderNav from '../organism/HeaderNav.ui'
import Button from '../molecules/Button.ui'
import { Heading_1 } from '../molecules/Headings.ui'
import Icon from '../atoms/Icon.ui'
import Icons from '../../styles/Icons'
import Palette from '../../styles/Palette'
type HeaderStyledProps = {
  carrousel?: JSX.Element
}
const HeaderStyled = styled.header<HeaderStyledProps>`
  width: 100vw;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${Padding._2};
  background-color: ${Palette.primary};
`
const Header = ({ carrousel }: HeaderStyledProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  return (
    <HeaderStyled>
      <HeaderNav>
        <Button>
          <Icon src={Icons.menu} alt="menu" />
        </Button>
        <Heading_1 text="Teaxers" />
        <Button>
          <Icon src={Icons.user} alt="login" />
        </Button>
      </HeaderNav>
      {carrousel}
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
    </HeaderStyled>
  )
}
export default Header
