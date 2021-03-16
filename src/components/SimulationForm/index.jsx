import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormFieldContainer, SimulationContainer } from "./style";

const SimulationForm = () => {
  const { register, handleSubmit } = useForm();

  const [noPlan, setNoPlan] = useState(0);
  const [withPlan, setWithPlan] = useState(0);

  const originTaxesbyDDD = (origin) => {
    switch (parseInt(origin)) {
      case 11:
        return 0.45

      case 16:
        return 1.95

      case 17:
        return 1.75

      case 18:
        return 0.95

      default:
        return 0;
    }
  };

  const destinationTaxesByDDD = (destination) => {
    switch (parseInt(destination)) {
      case 11:
        return 0.95

      case 16:
        return 1.45

      case 17:
        return 1.25

      case 18:
        return 0.45

      default:
        return 0;
    }
  };

  const handleValuesChangingForDDD = (data) => {
    const { origin, destination, duration, plan } = data;
    const originTax = originTaxesbyDDD(origin)
    const destinationTax = destinationTaxesByDDD(destination)

    const totalTax = originTax + destinationTax
    const totalTaxPlan = totalTax * 1.1
    const extraMinutes = duration -plan

    const callCost = totalTax * duration
    const planCost = extraMinutes * totalTaxPlan


    setNoPlan(callCost)

    if(extraMinutes <= 0){
      setWithPlan(0)
    } else {
      setWithPlan(planCost)
    }
  };

  return (
    <SimulationContainer>
      <form onChange={handleSubmit(handleValuesChangingForDDD)}>
        <FormFieldContainer>
          <label htmlFor="origin">DDD de Origem</label>
          <select name="origin" id="origin" ref={register}>
            <option defaultValue></option>
            <option value="11">11</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </select>
        </FormFieldContainer>

        <FormFieldContainer>
          <label htmlFor="destination">DDD de Destino</label>
          <select name="destination" id="destination" ref={register}>
            <option defaultValue></option>
            <option value="11">11</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </select>
        </FormFieldContainer>

        <FormFieldContainer>
          <label htmlFor="duration">Duração da Chamada(min)</label>
          <input type="number" name="duration" id="duration" ref={register} />
        </FormFieldContainer>

        <FormFieldContainer>
          <label htmlFor="plan">Plano</label>
          <select name="plan" id="plan" ref={register}>
            <option value="30">Fale+ 30</option>
            <option value="60">Fale+ 60</option>
            <option value="120">Fale+ 120</option>
          </select>
        </FormFieldContainer>

        <FormFieldContainer>
          <label htmlFor="noPlan">Sem Fale+</label>
          <div>R$ {noPlan.toFixed(2)}</div>
        </FormFieldContainer>

        <FormFieldContainer>
          <label htmlFor="withPlan">Com Fale+</label>
          <div>R$ {withPlan.toFixed(2)}</div>
        </FormFieldContainer>
      </form>
    </SimulationContainer>
  );
};

export default SimulationForm;
