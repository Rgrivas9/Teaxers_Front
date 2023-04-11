import { Outlet } from 'react-router-dom'
import GlobalStyle from './styles/Global'
import Header from './ui-components/templates/Header.ui'
import Footer from './ui-components/templates/Footer.ui'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
