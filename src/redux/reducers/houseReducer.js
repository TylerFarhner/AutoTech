import { FETCH_HOUSES } from '../actions/houseAction'

const initialState = {
    houses: []
}

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_HOUSES:
            // when this is triggered
            return {
                ...state,
                houses: action.payload
            }
    }

    return state
}