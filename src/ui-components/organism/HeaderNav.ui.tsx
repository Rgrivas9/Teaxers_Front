import styled from 'styled-components'
import { Padding } from '../../styles/Spacing'

type HeaderNavStyledProps = {
  children?: JSX.Element | JSX.Element[]
}
const HeaderNavStyled = styled.nav<HeaderNavStyledProps>`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: ${Padding._4};
`
const HeaderNav = ({ children }: HeaderNavStyledProps): JSX.Element => {
  return <HeaderNavStyled>{children}</HeaderNavStyled>
}
export default HeaderNav
