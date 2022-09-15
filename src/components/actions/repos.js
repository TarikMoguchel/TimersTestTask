import axios from "axios";
import { setTimeZones } from "../../reducers/reposReducer";

export const getTimeZones = () =>{
    return async (dispatch)=>{
        const response = await axios.get("timezones.json")
        dispatch(setTimeZones(response.data))
    }
}