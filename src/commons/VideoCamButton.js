import React from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Videocam } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';


export const WebCamButton=()=>{
    const { toggleWebcam } = useMeeting()
    return (
        <IconButton onClick={() => toggleWebcam()}>
            <Videocam color="primary"/> 
        </IconButton>
    )
}