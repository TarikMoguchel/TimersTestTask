const GET_TIMEZONE="GET_TIMEZONE"

const defaultState={
    timezones:[],
    loaded:false,
}

export default function  reposReducer(state=defaultState,action){
    switch (action.type){
        case GET_TIMEZONE:
            return{
                loaded:true,
                timezones:action.payload
            }
        default:
            return state
    }

}
export const setTimeZones = (repos) => ({type:GET_TIMEZONE,payload:repos})