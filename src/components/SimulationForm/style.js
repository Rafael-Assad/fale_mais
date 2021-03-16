import styled from 'styled-components'

export const SimulationContainer = styled.div`
  width: 85vw;
  /* min-height: 80vh; */

  padding: 1.5rem;

  background-color: #FFF;

  box-shadow: 1px 1px 4px #000 ;

  border-radius: 0.3rem;
`

export const FormFieldContainer = styled.div`
  margin-bottom: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  input, select{
    width: 8rem;
    padding: 0.4rem;
    border:none;
    outline:none;

    background-color: #f6f6f6;

    text-align: center;
    box-shadow: 0.2px 0.2px 3px #000 ;

    border-radius:0.4rem;
  }

  #noPlan, #withPlan{
    background-color: #fff;
    box-shadow:none;
  }
`