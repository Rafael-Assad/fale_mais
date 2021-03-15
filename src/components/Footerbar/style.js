import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100vw; 
  max-width: 100%;

  height: 200px;

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
      border: 1px solid #000;
    }
  }

  .lowFooter{
    background-color: #67001f;
  }

`