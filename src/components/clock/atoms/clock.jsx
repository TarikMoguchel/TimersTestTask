import React, { useEffect, useRef, useState } from 'react'
import '../style/clock.css'


export const Clock = (params) => {
    const refHour = useRef()
    const refMinute = useRef()
    const refSecond = useRef()

    const [hour, setHour] = useState("0")
    const [minute, setMinute] = useState("0")
    const [seconds, setSecond] = useState("0")

    const [timerId, setTimerId] = useState("0")



    useEffect(() => {
        if (timerId) {
            clearTimeout(timerId)
        }
        const timeId = setInterval(setClock, 1000)
        setTimerId(timeId)

        const hourHand = refHour
        const minuteHand = refMinute
        const secondHand = refSecond

        function setClock() {
            const currentDate = new Date()
            const secondsRatio = currentDate.getSeconds() / 60
            const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
            const hoursRatio = (minutesRatio + currentDate.getHours()-7 + Number(params.time.replaceAll('[+]', ''))) / 12

            setSecond(currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds())
            setMinute(currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes())
            setHour((currentDate.getHours() < 10 ? "0" + (currentDate.getHours()-7) : currentDate.getHours()-7) + Number(params.time.replaceAll('[+]', '')))

            if(refHour.current === null) {
                clearInterval(timeId)
                return
            }
            if (hourHand) {
                setRotation(secondHand, secondsRatio)
                setRotation(minuteHand, minutesRatio)
                setRotation(hourHand, hoursRatio)
            }
        }

        function setRotation(element, rotationRatio) {
            element.current.style.setProperty('--rotation', rotationRatio * 360)
        }
        setClock()
    }, [params.time])

    return (
        <div>
            <div className="clock">
                <div className="hand hour" ref={refHour}></div>
                <div className="hand minute" ref={refMinute}></div>
                <div className="hand sec" ref={refSecond}></div>
                <div className="number number1">I</div>
                <div className="number number2">I</div>
                <div className="number number3">I</div>
                <div className="number number4">I</div>
                <div className="number number5">I</div>
                <div className="number number6">I</div>
                <div className="number number7">I</div>
                <div className="number number8">I</div>
                <div className="number number9">I</div>
                <div className="number number10">I</div>
                <div className="number number11">I</div>
                <div className="number number12">I</div>
            </div>
            <div className='clock_numbers'>
                {hour}:{minute}:{seconds}
            </div>
        </div>
    )
}