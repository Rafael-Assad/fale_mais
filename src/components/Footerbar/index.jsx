import { useHistory } from 'react-router-dom'

import { AiFillFacebook , AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'

import Logo from '../../assets/imgs/logo.png'

import { FooterContainer } from "./style";
import Button from "../Button";


const FooterBar = () => {
  const history = useHistory()

  return (
    <FooterContainer>
      <div className="upperFooter">
        <div className="buttonBox">
          <Button 
            bgColor ='#F6F6F6'
            textColor ='#67001f'
            clickAction={() => history.push('/Assinatura')}

          >Contratar Plano</Button>
          <div>
            <p className='phone'>Televendas: XXXX-XXXX</p>
            <p className='schedule'>Todos os dias, das 7h as 22h</p>
          </div>
        </div>

        <div className="infoBox">
          <img src={Logo} alt=""/>
          <span>
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <FiInstagram/>
          </span> 
        </div>
      </div>

      <div className="lowFooter">
        Desenvolvido por: Rafael Assad
      </div>
    </FooterContainer>
  );
};

export default FooterBar;
