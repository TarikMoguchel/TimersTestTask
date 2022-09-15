import { Clock } from "../atoms/clock"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import '../style/clockCard.css'
import { deleteClock, editClock } from "../../actions/clock_actions"

export const ClockCard = (params) => {
    const [timeZone, setTimeZone] = useState("+0")
    const repos = useSelector(state => state.repos.timezones)
    const Loaded = useSelector(state => state.repos.loaded)
    const cloks = useSelector(state => state.clocks.clocks)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeZone(cloks.find(e => e.id === params.id).timezone)
    }, [cloks])
    return (
        <div className="clockWrapper">
            <div className="clockCard">
                <button className="delete_button" onClick={() => dispatch(deleteClock(params.id))}>X</button>
                <Clock time={timeZone} />
                {!Loaded?<p>Идет загрузка часовых поясов</p>:
                <select name="drop1" id="Select1" value={timeZone} onChange={e => dispatch(editClock(params.id, e.target.value))}>
                    {repos.map((e, i) => {
                        return <option key={i} value={e.timezone}>{e.name}</option>
                    })}
                </select>
                }
            </div>
        </div>
    )
}