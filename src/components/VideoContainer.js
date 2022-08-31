import React, { useEffect } from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Controls } from './Controls';
import { VideoPlayer } from './VideoPlayer';
import { Grid} from "@nextui-org/react";
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';

export const VideoContainer=(props)=>{
    const [joined, setJoined] = useEffect(false)
    const {join} = useMeeting()
    const { participants } = useMeeting();
    
    useEffect(() => {
        console.log("VideoContainer")
        join()
        setJoined(true)
    })

    return  joined ? (
        <div style={{ "background-color": "black"}}>
            <div>
                <Grid.Container justify="center" >
                { 
                    [...participants.keys()].map((participantId) => {
                        console.log(props.meetingId)
                        return ( 
                            <Grid>
                                <VideoPlayer participantId={participantId} key = {participantId} />
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