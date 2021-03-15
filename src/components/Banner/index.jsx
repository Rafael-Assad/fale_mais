import { BannerContainer } from "./style"
import FaleMaisLogo from '../../assets/imgs/FaleMais.png'

const Banner = () =>{
  return(
    <BannerContainer>
      <img src={FaleMaisLogo} alt=""/>
      <p>Pra você aproveitar e falar com quem  é mais importante, sem se precoupar com a fatura</p>
    </BannerContainer>
  )
}

export default Banner