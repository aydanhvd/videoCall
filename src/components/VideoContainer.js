import React, { useState, useEffect } from 'react';
import { useMeeting} from '@videosdk.live/react-sdk';
import { VideoPlayer } from './VideoPlayer';
import { Grid } from "@nextui-org/react";
import { CircularProgress } from '@mui/material';
import { Timer } from './Timer';

export const VideoContainer = () => {
    const [joined, setJoined] = useState(false)

    const { 
        join, 
        participants
    } = useMeeting()
    
    useEffect(() => {
        if (!joined) {
            join()
            setJoined(true)
        }
    },[])

    return  joined ?  (
        <div>
            <div>
                <Grid.Container justify = "center" >
                { 
                    [...participants.keys()].map((participantId) => {
                        return ( 
                            <Grid key = {participantId}>
                                <VideoPlayer participantId={participantId}  />
                            </Grid>
                        )
                    }
                )}
                </Grid.Container>
                {/* <Timer/> */}
            </div>
        </div>
    ) :  (
        <CircularProgress indeterminate />
    )
}