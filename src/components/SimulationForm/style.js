import styled from "styled-components";

export const SimulationContainer = styled.div`
  width: 85vw;
  max-width: 55rem;

  padding: 1.5rem;

  background-color: #fff;

  box-shadow: 1px 1px 4px #000;

  border-radius: 0.3rem;

  .inputs, .values{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .values{
    margin-top: 3rem;
    justify-content: space-around;
    h3{
      font-size: 2rem;
    }
    div{
      font-size:1.5rem
    }
  }

  @media screen and (min-width: 768px) {
    .inputs, .values {
      flex-direction: row;
    }
  }
`;

export const FormFieldContainer = styled.div`
  margin-bottom: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  input,
  select {
    width: 8rem;
    padding: 0.4rem;
    border: none;
    outline: none;

    background-color: #f6f6f6;

    text-align: center;
    box-shadow: 0.2px 0.2px 3px #000;

    border-radius: 0.4rem;
  }
  @media screen and (min-width: 768px) {
    label {
      margin: 0 auto;
    }
    margin-right: 1rem;
  }

  input,
  select {
    width: 12rem;
  }
`;
