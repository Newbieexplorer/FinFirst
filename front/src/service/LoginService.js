import {createStore} from 'redux'
import axios from 'axios'
import store from './Store'
import {setLogin} from '../action/LoginActions'

export function login(login,password){
  axios.post(`https://mighty-fjord-19392.herokuapp.com/users`, {
      login:login,
      password: password
  }).then(res => {
      store.dispatch(setLogin(res.data.login));
  }).catch(error => {
      console.log(error);
  })
}
