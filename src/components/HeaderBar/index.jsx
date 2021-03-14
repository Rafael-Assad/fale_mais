import {useState} from 'react'
import logo from "../../assets/imgs/logo.png";
import { HeaderContainer, NavContainer } from "./style";
import Button from "../Button";
import {TiThMenu} from 'react-icons/ti'


const HeaderBar = () => {

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
        Aqui
      </div>

      <div className="bottomHeader">
        <img src={logo} alt="Telzir" />

        <div className='iconeMenu' onClick={handleToggleMenu}>
          <TiThMenu/>
        </div>
        <NavContainer visible={visibel}>

          <ul className={toggleMenu} >
            <li>Home</li>
            <li>Planos</li>
            <li>Assinatura</li>
          </ul>
        </NavContainer>

        <Button
          bgColor="#F6F6F6"
          textColor="#67001F"
          clickAction={() => console.log("foi")}
        >
          Clique aqui
        </Button>
      </div>
    </HeaderContainer>
  );
};

export default HeaderBar;
