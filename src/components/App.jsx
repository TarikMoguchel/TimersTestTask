import React from 'react'
import { Clock } from './clock/atoms/clock';
import { ClockCard } from './clock/organoids/clockCard';

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getTimeZones } from './actions/repos';
import './App.css'
import { addClock, deleteClock } from './actions/clock_actions';
const App = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.clocks.clocks)
    useEffect(() => {
        dispatch(getTimeZones())
    }, [])

    return (
        <div className='app'>
            {repos.map((e, i) => {
                return <ClockCard key={i} id={e.id} />
            })}
            {repos.length < 24 ?
                <div className='AddButtonWrapper'>
                    <button className="AddButton" onClick={() => dispatch(addClock())}>Добавить часы</button>

                </div>
                :null}
        </div>
    )
}
export default App;