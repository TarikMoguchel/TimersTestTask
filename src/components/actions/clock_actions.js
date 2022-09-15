import { ADD_CLOCK, DELETE_CLOCK, EDIT_CLOCK } from "../../reducers/clockReducer"


export const addClock= () =>{
    return (dispatch)=>{
        dispatch({type:ADD_CLOCK})
    }
}
export const editClock= (id,timezone) =>{
    return (dispatch)=>{
        dispatch({type:EDIT_CLOCK, payload:{id:id,timezone:timezone}})
    }
}
export const deleteClock= (params) =>{
    return (dispatch)=>{
        dispatch({type:DELETE_CLOCK, payload:params})
    }
}
