import React, { useState, useEffect } from 'react';
import { useMeeting} from '@videosdk.live/react-sdk';
import { VideoPlayer } from './VideoPlayer';
import { Grid} from "@nextui-org/react";
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';
import { Controls } from './Controls';

export const VideoContainer = () => {
    const [joined, setJoined] = useState(false)

    const { 
        join, 
        participants, 
        toggleWebcam 
    } = useMeeting({
        onParticipantJoined,
    })
    
    function onParticipantJoined(participant) {
        console.log(" onParticipantJoined", participant);
}
    
    useEffect(() => {
        if (!joined) {
            join()
            setJoined(true)
        }
    },[])

    return  joined ? (
        <div>
            <div>
                <Grid.Container justify="center" >
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
                <Controls/>
            </div>
        </div>
    ) :  (
        <BounceLoader
            loading = {true}
            color = { Palette.ibaBlue }
            size = {"5vh"}
        />
    )
}