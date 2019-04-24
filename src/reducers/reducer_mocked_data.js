export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return action.payload.data.product;
    default:
      return state;
  }
}
