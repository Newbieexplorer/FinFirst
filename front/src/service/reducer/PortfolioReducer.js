export default function quoteState(state=[], action){
  if (action.type === 'PUT_MASSIVE_PORFOLIO') {
    return [...state,...action.payload];
  }
  if(action.type === 'PUT_PORTFOLIO'){
    return [...state, action.payload]
  }
  return state;
}
