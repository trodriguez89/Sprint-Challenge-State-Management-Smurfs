import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from "../actions/smurfActions";


const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
            };
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case ADD_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}