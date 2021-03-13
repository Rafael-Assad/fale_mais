import GlobalStyle from './style/GlobalStyle'
import { Container } from './style/styleApp'
import Routes from './routes'

import HeaderBar from './components/HeaderBar'
import FooterBar from './components/Footerbar'


function App() {
  return (
    <Container>
      <HeaderBar/>

      <GlobalStyle/>

      <Routes/>

      <FooterBar/>
    </Container>
  );
}

export default App;
