import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 85vw;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  box-shadow: 1px 1px 4px #000 ;

  border-radius: 0.3rem;

  button{
    width: 80%;
  }
`
export const FieldContainer = styled.div`
  width: 100% ;
  margin-bottom: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input, select{
    width: 100%;
    padding: 0.4rem;
    border:none;
    outline:none;

    background-color: #f6f6f6;

    text-align: left;
    box-shadow: 0.2px 0.2px 3px #000 ;

    border-radius:0.4rem;
  }

  .error{
    width: 100%;
    padding: 0.2rem;
    padding-left: 1rem;
    margin-top:0.5rem;

    color: #fff;

    background-color: #f00;
  }
`