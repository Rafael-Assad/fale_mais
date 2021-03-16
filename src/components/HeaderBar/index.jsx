import {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

import logo from "../../assets/imgs/logo.png";
import { HeaderContainer, NavContainer } from "./style";
import Button from "../Button";
import {TiThMenu} from 'react-icons/ti'


const HeaderBar = () => {
  const history = useHistory()

  let [toggleMenu, setToogleMenu] = useState('')
  let [visibel, setVisible] = useState(true)

  const handleToggleMenu = () =>{
    setVisible(!visibel)

    if(toggleMenu === ''){
      setToogleMenu('open')
      
      console.log(visibel)

      return 
    } else if(toggleMenu === 'open'){
      setToogleMenu('')
      console.log(visibel)
      return 

    }
  }



  return (
    <HeaderContainer>
      <div className="topHeader">
        
        <p>Televendas: XXXX-XXXX</p>
      </div>

      <div className="bottomHeader">
        <img src={logo} alt="Telzir" />

        <div className='iconeMenu' onClick={handleToggleMenu}>
          <TiThMenu/>
        </div>
        <NavContainer visible={visibel}>

          <ul className={toggleMenu} >
            <li>
              <Link to='/' onClick={handleToggleMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to='/Planos' onClick={handleToggleMenu}>
                Planos
              </Link>
            </li>

            <li>
              <Link to='/Assinatura' onClick={handleToggleMenu}>
                Assinatura
              </Link>
            </li>
          </ul>
        </NavContainer>

        <Button
          bgColor="#F6F6F6"
          textColor="#67001F"
          clickAction={() => history.push('/Assinatura')}
        >
          Assine Agora!
        </Button>
      </div>
    </HeaderContainer>
  );
};

export default HeaderBar;
