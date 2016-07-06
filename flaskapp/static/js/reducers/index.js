import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'


import { user } from './user'
import { car } from './car'

const rootReducer = combineReducers({
    user,
    car
})

export default rootReducer
