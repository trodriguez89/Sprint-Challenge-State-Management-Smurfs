import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"

export const getSmurf = () => dispatch => {
    dispatch ({ type: FETCH_SMURF_START});
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
        console.log(response)
        dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: FETCH_SMURF_FAIL, payload: error.response})
    })
}

export const addSmurf = (smurfInfo) => dispatch => {
    axios.post("http://localhost:3333/smurfs", smurfInfo)
    .then(response => {
        console.log(response);
        dispatch({ type: ADD_SMURF_SUCCESS, payload: smurfInfo});
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: ADD_SMURF_FAIL, payload: error.response})
    })
}