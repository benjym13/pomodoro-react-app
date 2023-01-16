import { Button, ButtonGroup } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Timer from './Timer';

const Counter = () => {
    // Creaamos un estado que pausa o no el intervalo del useEffect, si está paused el interval no funciona, si no está paused el interval corre
    // no habría problema porque se limpia el interval despues de cada actualización del estado
    /* const initialTiming = 0;
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(initialTiming) */
    const initialTiming =  {
        minutes:0,
        seconds:6
    };
    const [time, setTime] = useState(initialTiming)
    const [paused, setPaused] = useState(false);
    const [rest, setRest] = useState(false);

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
    function restartTiming() {
        alert(`quedan ${time.minutes > 10 ? time.minutes : '0' + time.minutes}mins ${time.seconds > 10 ? time.seconds : '0' + time.seconds}sg, ¿seguro que quieres reiniciar el temporizador?`);
        setPaused(false);
        setTime({
            minutes:25,
            seconds:0
        })
        setRest(!rest);
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

    
    return (
        <div>
            <div className="c-counter">
                <ButtonGroup variant="contained"  size="small">
                    <Button onClick={restartTiming}>POMODORO</Button >
                    <Button onClick={()=>{setTime({minutes:5,seconds:0})}}>SHORT BREAK</Button >
                    <Button onClick={()=>{setTime({minutes:15,seconds:0})}}>LONG BREAK</Button >
                </ButtonGroup>
                {rest ? (<h2>TIME TO REST</h2>) : (<h2>TIME TO FOCUS</h2>)}
                <Timer 
                    seconds={time.seconds}
                    minutes={time.minutes}
                ></Timer>
                {/* El button ejecuta una function que cambia de true/false el estado */}
                <Button variant='contained' onClick={startStop}>{paused == false ? 'START' : 'STOP'}</Button  >
                {/* {!rest ?
                    (<button className={`${!paused ? 'available' : 'disable'}`} onClick={restartTiming}>RESTART</button>) : ''
                } */}
                
            </div>
        </div>
    )
}

export default Counter
