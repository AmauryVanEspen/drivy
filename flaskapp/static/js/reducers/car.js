import * as actions from '../actions/car'
import { Map } from 'immutable'
import _ from 'lodash'

const usersInitial = Map({
    items: []
})

export function cars(state = usersInitial, action) {
    const items = state.get('items')
    let userIndex

    switch (action.type) {

        case actions.FETCH_CAR_LIST_START:
            return state.merge({ loading: true })

        case actions.FETCH_CAR_LIST_SUCCESS:
            return state.merge({
                items: action.resp.data
            })

        default:
            return state
    }
}
