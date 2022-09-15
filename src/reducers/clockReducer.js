export const ADD_CLOCK = "ADD_CLOCK"
export const DELETE_CLOCK = "DELETE_CLOCK"
export const EDIT_CLOCK = "EDIT_CLOCK"

const defaultState = {
    clocks: [
        {
            id: 0,
            timezone: "+2"
        },
        {
            id: 1,
            timezone: "+2"
        }
    ],
    newId: 2
}

export default function clockReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_CLOCK:
            return { clocks: [...state.clocks, { id: state.newId, timezone: "+2" }], newId: state.newId + 1 }
        case EDIT_CLOCK:
             return { clocks: [...state.clocks.map(item => item.id === action.payload.id ? action.payload : item)], newId: state.newId }
        case DELETE_CLOCK:
            return { clocks: [...state.clocks.filter(item => item.id !== action.payload)], newId: state.newId }
        default:
            return state
    }

}
