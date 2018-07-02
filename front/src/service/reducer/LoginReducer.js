export default function quoteState(state={}, action){
  if (action.type === 'PUT_LOGIN_STATE') {
    return state = action.payload
  }
  if(action.type === 'DELETE_LOGIN_STATE'){
    return state = {};
  }
  return state;
}
