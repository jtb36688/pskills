import axios from "axios"

export const GET_PRISONS_START = "GET_PRISONS_START"
export const GET_PRISONS_SUCCESS = "GET_PRISONS_SUCCESS"
export const GET_PRISONS_FAILURE = "GET_PRISONS_FAILURE"

const PrisonUrl = "https://prisoner-skills-backend.herokuapp.com/api/prisons";

export const getPrisons = () => dispatch => {
    dispatch({ type: GET_PRISONS_START })
    axios
    .get(`${PrisonUrl}`)
    .then(res => dispatch({ type: GET_PRISONS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_PRISONS_FAILURE, payload: err}))
}