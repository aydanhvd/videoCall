import React from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { CallEnd } from "@material-ui/icons";
import { Fab } from '@material-ui/core';


export const EndCallButton=()=>{
    const { leave } = useMeeting()

    return (
        <Fab color="secondary" aria-label="leave" onClick={leave}>
            <CallEnd />
        </Fab>
    )
}