import React, { useState, useEffect } from 'react'

const Timer = ({seconds, minutes}) => {

    
    function minutesPrinted() {
        if(minutes == 0) {
            return `00`
        }
        else if(minutes > 0 && minutes < 10) {
            return `0${minutes}`
        }
        else {
            return minutes;
        }
    }

    return (
        <div><h1>{minutesPrinted()}:{seconds < 10 ? '0'+seconds : seconds }</h1></div>
    )
}

export default Timer