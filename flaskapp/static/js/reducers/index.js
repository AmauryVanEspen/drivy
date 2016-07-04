import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'


import { users } from './users'
import { cars } from './cars'

const rootReducer = combineReducers({
    users,
    cars
})

export default rootReducer
