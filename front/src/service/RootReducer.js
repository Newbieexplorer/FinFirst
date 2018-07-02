import { combineReducers } from 'redux'
import login from './reducer/LoginReducer'
import portfolio from './reducer/PortfolioReducer'
// add more reducers

export default combineReducers({login,portfolio})
