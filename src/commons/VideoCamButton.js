import React from 'react';
import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import { Videocam, VideocamOff } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';


export const WebCamButton=()=>{
    const { toggleWebcam, meeting } = useMeeting()
    const localParticipant = meeting.localParticipant
    const {
        webcamOn 
    } = useParticipant(
        localParticipant.id
    )
    return (
        <IconButton onClick={() => toggleWebcam()}>
            { webcamOn ? <VideocamOff color="secondary"/> : <Videocam color="primary"/> }
        </IconButton>
    )
}