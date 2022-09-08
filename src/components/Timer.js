import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';

export const Timer=()=>{
    const [counter, setCounter] =useState(0);

        // Third Attempts
    useEffect(() => {
    const timer =
            counter < 60 && setInterval(() => setCounter(counter + 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const getFormattedSeconds =()=>{
        var formattedSeconds = counter
        if (counter < 10) {
            formattedSeconds = `0${counter}`
        } else if (counter === 60) {
            formattedSeconds = "00"
        } 
        return formattedSeconds
    }
    
    return (
        <CountDownTimer >
            <span>{counter === 60 ? "01" : "00"}</span>
            <span>:</span>
            <span>{ getFormattedSeconds()}</span>
        </CountDownTimer>
    );
}

const CountDownTimer = styled.div `
    width: 6vh ;
    height: 3vh ;
    border-radius: 4px;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    color: white; 
    background-color: rgba(0, 0, 0, 0.2) ;
    position: absolute ;
    bottom: 5vh;
`
