import React from 'react';
import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import { red, green } from "@material-ui/core/colors";
import {
    MicOff,
    Mic,
} from "@material-ui/icons";
import { IconButton } from '@material-ui/core';


export const MicButton=()=>{
    const {toggleMic, meeting} = useMeeting()
    
    const localParticipant = meeting.localParticipant

    const {
        micOn 
    } = useParticipant(
        localParticipant.id
    )

    return (
        <IconButton onClick={() => toggleMic()}>
            { micOn ? <MicOff color="secondary"/> : <Mic color="primary"/> }
        </IconButton>
    )
}