import styled from 'styled-components'
import BannerImage from '../../assets/imgs/chrono.jpg'

export const BannerContainer = styled.div`
  width: 100vw;
  max-width:100%;
  height: 17rem;

  padding: 1.5rem;
  background-image: url(${() => BannerImage});
  background-size: 120vw;
  background-position: 40% 30%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  img{
    width: 12rem;
  }

  p{
    font-size: 1.5rem;
    color: #F6F6F6;

    background-color:#67001f88;
  }
`