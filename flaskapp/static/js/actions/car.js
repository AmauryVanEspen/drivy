import reqwest from 'reqwest'
import {systemMessage} from './systemMessage'

export const FETCH_CAR_LIST_START = 'FETCH_CAR_LIST_START'
export const FETCH_CAR_LIST_SUCCESS = 'FETCH_CAR_LIST_SUCCESS'


export function fetchCars() {
    return (dispatch) => {
        dispatch({
            type: FETCH_CAR_LIST_START
        })
        return reqwest({
            url: '/api/cars/',
            type: 'json',
            method: 'GET',
            contentType: 'application/json'
        }).then((resp) => {
            dispatch({
                type: FETCH_CAR_LIST_SUCCESS,
                resp
            })
        }).catch((err) => {
            dispatch(systemMessage({
                type: 'error',
                header: 'Error: failed to fetch users',
                msg: err
            }))
        })
    }
}
