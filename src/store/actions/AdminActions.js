import axios from 'axios';

export const GET_LINKED_START = 'GET_LINKED_START'
export const GET_LINKED_SUCCESS = 'GET_LINKED_SUCCESS'
export const GET_LINKED_FAILURE = 'GET_LINKED_FAILURE'
export const ADD_WORKER_START = 'ADD_WORKER_START'
export const ADD_WORKER_SUCCESS = 'ADD_WORKER_SUCCESS'
export const ADD_WORKER_FAILURE = 'ADD_WORKER_FAILURE'
export const UPDATE_WORKER_START = 'UPDATE_WORKER_START'
export const UPDATE_WORKER_SUCCESS = 'UPDATE_WORKER_SUCCESS'
export const UPDATE_WORKER_FAILURE = 'UPDATE_WORKER_FAILURE'
export const DELETE_WORKER_START = 'DELETE_WORKER_START'
export const DELETE_WORKER_SUCCESS = 'DELETE_WORKER_SUCCESS'
export const DELETE_WORKER_FAILURE = 'DELETE_WORKER_FAILURE'

const ServerUrl = 'https://prisoner-skills-backend.herokuapp.com/api/prisoners'

export const getLinkedWorkers = () => dispatch => {
    dispatch({ type: GET_LINKED_START });
    axios
    .get(`${ServerUrl}`)
    .then(res => {dispatch({ type: GET_LINKED_SUCCESS , payload: res.data })})
    .catch(err => {dispatch({ type: GET_LINKED_FAILURE , payload: err })})
}

export const addWorker = workerdata => dispatch => {
    dispatch({ type: ADD_WORKER_START });
    axios
    .post(`${ServerUrl}`, workerdata)
    .then(res => {dispatch({ type: ADD_WORKER_SUCCESS , payload: res.data })})
    .catch(err => {dispatch({ type: ADD_WORKER_FAILURE , payload: err })})
}

export const updateWorker = (workerdata, id) => dispatch => {
    dispatch({ type: UPDATE_WORKER_START });
    axios
    .put(`${ServerUrl}/${id}`, workerdata)
    .then(res => {dispatch({ type: UPDATE_WORKER_SUCCESS , payload: res.data })})
    .catch(err => {dispatch({ type: UPDATE_WORKER_FAILURE , payload: err })})
}

export const deleteWorker = (id) => dispatch => {
    dispatch({ type: DELETE_WORKER_START });
    axios
    .delete(`${ServerUrl}/${id}`)
    .then(res => {dispatch({ type: DELETE_WORKER_SUCCESS , payload: res.data })})
    .catch(err => {dispatch({ type: DELETE_WORKER_FAILURE , payload: err })})
}