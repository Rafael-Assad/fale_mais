import { GETPRICE } from './actionsType'

const getPrice = (price) =>{
  return{
    'type': GETPRICE,
    price
  }
}

export default getPrice