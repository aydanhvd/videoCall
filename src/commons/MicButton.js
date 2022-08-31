import React from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Mic } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';


export const MicButton=()=>{
    const { toggleMic } = useMeeting()

    return (
        <IconButton onClick={() => toggleMic()}>
            <Mic color="primary"/> 
        </IconButton>
    )
}