import React, { useState, useEffect } from 'react';
import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import { VideoPlayer } from './VideoPlayer';
import { Grid } from "@nextui-org/react";
import { Timer } from './Timer';
import { PermissionsPage } from './PermissionsPage';

export const VideoContainer = () => {
    const [readyToJoin , setReadyToJoin] = useState(false)
    const [joined, setJoined] = useState(false)
    const { join, participants, participantId , toggleWebcam , toggleMic} = useMeeting()
    const { webcamOn,  micOn } = useParticipant( participantId )

    const onStart = ()=>{
        setReadyToJoin(true)
        toggleWebcam()
        toggleMic()
    }

    useEffect(() => {
        if (!joined) {
            join()
            setJoined(true)
        }
    },[joined, join])

    return  readyToJoin ? (
        <div>
            <div>
                <Grid.Container justify = "center" >
                { 
                    [...participants.keys()].map((participantId) => {
                        return ( 
                            <Grid key = { participantId }>
                                <VideoPlayer participantId = { participantId }  />
                            </Grid>
                        )
                    }
                )}
                </Grid.Container>
                <Timer
                    participants = { participants } 
                    participantId = { participantId }
                /> 
            </div>
        </div>
    ) :  (
        <PermissionsPage onClick = { onStart }/>
    )
}