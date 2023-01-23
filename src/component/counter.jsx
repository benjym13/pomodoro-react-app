import { Button, ButtonGroup, Drawer } from '@mui/material';
import React, { useState, useEffect } from 'react'
import SettingsCounter from './SettingsCounter';
import Timer from './Timer';

const Counter = () => {
    // Creaamos un estado que pausa o no el intervalo del useEffect, si está paused el interval no funciona, si no está paused el interval corre
    // no habría problema porque se limpia el interval despues de cada actualización del estado
    /* const initialTiming = 0;
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(initialTiming) */
    const initialTiming =  {
        minutes:25,
        seconds:0
    };

    // STATES
    const [time, setTime] = useState(initialTiming)
    const [paused, setPaused] = useState(false);
    const [rest, setRest] = useState(false);
    const [formTime, setFormTime] = useState(null)

    useEffect(() => {
        let startTimer;
        if(paused == true) {
        startTimer = setInterval(() => {
                setTime({
                    minutes: time.minutes,
                    seconds:time.seconds - 1
                });
                if(time.seconds < 1) {
                    setTime({
                        minutes: time.minutes - 1,
                        seconds:59
                    });
                }
                resting()
                console.log(time);
            }, 1000);
            console.log(paused);
        }
        return () => {
            console.log(paused);
            clearInterval(startTimer)
        }
    },[time, paused])
    // function para parar y reaunudar la cuenta atrás
    function startStop () {
        setPaused(!paused);
    }
    function restartTiming(time) {
        alert(`quedan ${time.minutes > 10 ? time.minutes : '0' + time.minutes}mins ${time.seconds > 10 ? time.seconds : '0' + time.seconds}sg, ¿seguro que quieres reiniciar el Pomodoro?`);
        setPaused(false);
        if(formTime == null) {
            setTime({
                minutes:25,
                seconds:0
            })
        } else if(formTime.minutes == ''){
            setTime({
                minutes:25,
                seconds:0
            })
        } else {
            setTime({
                minutes: formTime.minutes,
                seconds: formTime.seconds
            });
        }
        setRest(false);
    }
    
    function resting() {
        if(time.seconds == 0 && time.minutes == 0) {
            setRest(!rest);
            setPaused(!paused);
            setTime({
                minutes:5,
                seconds:0
            })
        }
    }

    function setCustomTime(pomodoroMin) {
        setTime({
            minutes: pomodoroMin.minutes,
            seconds: pomodoroMin.seconds
        })
        setRest(false)
        setFormTime(pomodoroMin);
    }
    // set Default short time
    function setShortBreak () {
        setTime({minutes:5,seconds:0});
        setRest(true);
        setPaused(false);
        if (formTime !== null ) {
            setTime({
                minutes: formTime.short,
                seconds:0
            });
        }
    }
    // set Default long time
    function setLongBreak () {
        setTime({minutes:15,seconds:0});
        setRest(true);
        setPaused(false);
        if (formTime !== null ) {
            setTime({
                minutes: formTime.long,
                seconds:0
            });
        }
    }
    
    return (
        <div>
            <div className="c-counter">
                <SettingsCounter 
                    time={setCustomTime}
                ></SettingsCounter>
                <ButtonGroup variant="contained"  size="small" style={{gap: '4px'}}>
                    <Button onClick={() => {restartTiming(time)}}>POMODORO</Button >
                    <Button onClick={setShortBreak}>SHORT BREAK</Button >
                    <Button onClick={setLongBreak}>LONG BREAK</Button >
                </ButtonGroup>
                {rest ? (<h2>TIME FOR A BREAK</h2>) : (<h2>TIME TO FOCUS</h2>)}
                <Timer 
                    seconds={time.seconds}
                    minutes={time.minutes}
                ></Timer>
                {/* El button ejecuta una function que cambia de true/false el estado */}
                <Button variant='contained' onClick={startStop}>{paused == false ? 'START' : 'STOP'}</Button  >
            </div>
        </div>
    )
}

export default Counter
