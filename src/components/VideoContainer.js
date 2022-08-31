import React, { useState, useEffect } from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Controls } from './Controls';
import { VideoPlayer } from './VideoPlayer';
import { Grid} from "@nextui-org/react";
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';

export const VideoContainer=(props)=>{
    const [joined, setJoined] = useState(false)
    const { join, participants, toggleWebcam  } = useMeeting()

    const joinUser =  async () => {
        await join()
    }
    
    useEffect(() => {
        joinUser()
        setJoined(true)
    },[])

    useEffect(()=>{
        toggleWebcam()
    }, [joined])

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
                {/* <Controls/> */}
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