import { ButtonContainer } from './style'

const Button = ({children, bgColor, textColor, clickAction}) => {
  return (
    <ButtonContainer bgColor={bgColor} textColor={textColor} onClick={clickAction} >
      {children}
    </ButtonContainer>
  )
}

export default Button