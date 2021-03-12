import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import priceReducer from './modules/price/reducer'

const reducer = combineReducers({
  'price': priceReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store