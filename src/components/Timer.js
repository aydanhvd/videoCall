import { useParticipant } from '@videosdk.live/react-sdk';
import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';

export const Timer=( { participants } )=>{
    const [counter, setCounter] = useState(0);
    const participantsArr = [...participants.values()] 

    const localParticipant = participantsArr.filter((participant)=> !participant.localParticipant)[0]
    const otherParticipant = participantsArr.filter((participant)=> !participant.otherParticipant)[0]

    const canStartCounter =()=>{
        return (
            counter < 60
            && participantsArr.length === 2
            && localParticipant.webcamOn 
            &&  localParticipant.micOn 
            && otherParticipant.webcamOn
            && otherParticipant.micOn
        )
    }

    useEffect(() => {
    const timer =
        canStartCounter()  
        && setInterval(() => setCounter(counter + 1), 1000);
        return () => clearInterval(timer);
    });

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
    left: 5vh ;
`
