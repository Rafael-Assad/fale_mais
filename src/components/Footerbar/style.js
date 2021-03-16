import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100vw; 
  max-width: 100%;

  height: 15rem;

  background-color: #aa0033;

  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .upperFooter{
    width: 100vw;
    max-width: 100%;

    height: 87%;
    padding: 1.5rem;

    display: flex;

    align-items: center;
    justify-content: space-between;


    .buttonBox{
      width:50%;
      height:100%;

      border-right: 1px solid #F6F6F6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:space-around;
      
      button{
        width: 9rem;
        font-weight:900;
      }

      p{
        color:#F6F6F6;
        font-size:0.8rem;
      }
      .phone{
        font-weight: 900;
        font-size:0.8rem;
      }

      .schedule{
        font-weight: 300;
        font-size:0.7rem;

      }

    }

    .infoBox{
      width:45%;
      height:100%;
      padding: 1.5rem 0;

      color:#F6F6F6;

      display: flex;
      flex-direction: column;
      justify-content:space-between;
      img{
        width: 10rem;
      }

      span{
        width: 100%; 
        svg{
          margin-left:2rem;
          font-size: 1.5rem;
        }
      }

    }
  }

  .lowFooter{
    height: 2rem;
    color:#F6F6F6;
    background-color: #67001f;

    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }

`