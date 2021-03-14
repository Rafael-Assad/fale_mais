import getPrice from './action'

export const getPriceThunk = (price) => (dispatch, getState) => {
  dispatch(getPrice(price))

}