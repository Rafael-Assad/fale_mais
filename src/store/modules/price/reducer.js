
import { GETPRICE } from './actionsType'

const priceReducer = (state=[], action) => {
  switch(action.type){
  case GETPRICE:
    return state = action.price
  
  default:
    return state

}


}

export default priceReducer