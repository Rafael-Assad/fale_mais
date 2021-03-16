import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-width: 100%;

  height: 100px;

  margin-bottom: 60px;

  background-color: #aa0033;

  border-bottom: 2px solid #CCC;

  display: flex;
  flex-direction: column;
  justify-content: space-space-between;

  .topHeader {
    width: 100vw;
    max-width: 100%;
    height: 30px;

    background-color: #67001f;
    z-index:9;
  }

  .bottomHeader {
    width: 100vw;
    max-width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    img {
      width: 80px;
    }

  }

  .iconeMenu{
    color: #F6F6F6  ;

    position: absolute;
    right: 33%;
    top: 55%;

    transform: translate(-25%, -50%);
    cursor: pointer;
    z-index: 10;
  }

  button{
    margin-right: 1rem;
  }

  @media screen and (min-width: 768px){
    .iconeMenu{
      display: none
    }
    
  }
`

export const NavContainer = styled.nav`
  position: absolute;
  top:0;

  ul {
    width: 100vw;
    height:100vh;

    padding-top:5rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    background-color: #aa0033;

    position: fixed;
    top:0;

    clip-path: circle(${props => props.visible ? '100px': '1000px'} at 80% -20%);
    -webkit-clip-path: circle(
      ${props => props.visible ? '100px': '1000px'} at 80% -20%);
    transition: all 1s ease-out;

    pointer-events:${ props => props.visible? 'none': 'all'};

    li{
      width: 100%;
      height: 5rem;
      padding-top: 2rem;
      color: #F6F6F6 ;
      text-align: center;
      a{
        text-decoration: none;
        color:inherit;
      }
    }
    

    li:active{
      background-color:#67001f;
    }
  }

  @media screen and (min-width: 768px){
    position: static;
    ul{
      width: 50vw;
      height:50%;

      padding: 0;

      clip-path: none;
      position: static;

      flex-direction: row;

      pointer-events: all;

      li{
      height: 2.5rem;
      padding-top: 0.5rem;
    }
    }

  }

`