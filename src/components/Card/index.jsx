import { CardContainer } from './style'

const Card = ({plan, range}) => {
  return (
    <CardContainer>
      <h2>Fale+ {plan}</h2>
      <ul>
        <li>Os primeiro {plan} minutos da chamada não alteram o valor do plano</li>
        <li>Pague somente minutos adicionais</li>
        <li>Fale com qualquer DDD de {range}</li>
        <li>Vantagens exclusivas do plano Fale+</li>
      </ul>
      
    </CardContainer>
  )
}

export default Card