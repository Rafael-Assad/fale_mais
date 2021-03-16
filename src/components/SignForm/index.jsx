// import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer, FieldContainer } from "./style";
import Button from '../Button'

const SignForm = () => {
  const schema = yup.object().shape({
    'fullName':yup
      .string()
      .required('Campo Obrigatório!')
      .min(6, 'Por favor, Informe o nome completo!')
      .matches(/^[a-z]+$/, 'Formato inválido'),
    'address': yup
      .string()
      .required('Campo Obrigatório!')
      .matches(/^[a-z]+$/, 'Formato inválido'),
    'city': yup
      .string()
      .required('Campo Obrigatório!')
      .matches(/^[a-z]+$/, 'Formato inválido'),
    'cpf':yup
      .string()
      .required('Campo Obrigatório!')
      .matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'CPF invalido!'),
    'plan':yup
      .string()
      .required('Escolha um Plano!')
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
    //Here is where the form would send the form
    //to Back-End through API
    //axios.post('api.com/post',data)
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleForm)}>
      <FieldContainer>
        <label htmlFor="fullName">Nome Completo:</label>
        <input 
          type="text" 
          name="fullName" 
          id="fullName"
          ref={register}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="address">Endereço:</label>
        <input 
          type="text" 
          name="address" 
          id="address" 
          ref={register}
        />
        {errors.address && <p className="error">{errors.address.message}</p>}
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="city">Cidade:</label>
        <input 
          type="text" 
          name="city" 
          id="city" 
          ref={register}
        />
        {errors.city && <p className="error">{errors.city.message}</p>}
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="cpf">CPF:</label>
        <input 
          type="text" 
          name="cpf" 
          id="cpf" 
          ref={register}
        />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="plan">Plano:</label>
        <select 
          type="text" 
          name="plan" 
          id="plan"
          ref={register}
        >
          <option defaultChecked></option>
          <option value="30">Fale+ 30</option>
          <option value="60">Fale+ 60</option>
          <option value="120">Fale+ 120</option>
        </select>
        {errors.plan && <p className="error">{errors.plan.message}</p>}
      </FieldContainer>

      <Button 
        type="submit"
        bgColor='#67001f'
        textColor='#f6f6f6'
      >
        Assinar Plano
      </Button>
    </FormContainer>
  );
};

export default SignForm;
