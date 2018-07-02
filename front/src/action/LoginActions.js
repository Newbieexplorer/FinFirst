export default function setLogin(login) {
  return {
    type: 'PUT_LOGIN_STATE',
    payload: login
  }
}
