import reqwest from 'reqwest'
import {systemMessage} from './systemMessage'


export const FETCH_USER_START = 'FETCH_USER_START'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

export const FETCH_USER_LIST_START = 'FETCH_USER_LIST_START'
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS'


export function fetchUser(id) {
    console.log("fetchUser");
    console.log(id);
    return (dispatch) => {
        dispatch({
            type: FETCH_USER_START
        })
        return reqwest({
            url: '/api/users/'+id,
            type: 'json',
            method: 'GET',
            contentType: 'application/json'
        }).then((resp) => {
            console.log(resp);
            dispatch({
                type: FETCH_USER_SUCCESS,
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

export function fetchUsers() {
    return (dispatch) => {
        dispatch({
            type: FETCH_USER_LIST_START
        })
        return reqwest({
            url: '/api/users/',
            type: 'json',
            method: 'GET',
            contentType: 'application/json'
        }).then((resp) => {
            console.log(resp);
            dispatch({
                type: FETCH_USER_LIST_SUCCESS,
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
