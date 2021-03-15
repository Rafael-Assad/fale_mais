import { FooterContainer } from "./style";
import Button from "../Button";
const FooterBar = () => {
  return (
    <FooterContainer>
      <div className="upperFooter">
        <div className="buttonBox">
          <Button 
            bgColor ='#F6F6F6'
            textColor ='#67001f'
            // clickAction={}

          >Contate-nos</Button>
          <div>
            <p className='phone'>Televendas: XXXX-XXXX</p>
            <p className='schedule'>Todos os dias, das 7h as 22h</p>
          </div>
        </div>

        <div className="infoBox">Outras informações</div>
      </div>
      <div className="lowFooter">Creditos</div>
    </FooterContainer>
  );
};

export default FooterBar;
