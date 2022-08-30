import React, {useState} from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Controls } from './Controls';
import { VideoComponent } from './VideoComponent';
import styled from 'styled-components';
import { Container, Grid, Row, Text } from "@nextui-org/react";

export const VideoContainer=(props)=>{
    const [joined, setJoined] = useState(false);
    const {join} = useMeeting()

    const { participants } = useMeeting();
    const joinMeeting = () => {
        setJoined(true);
        join()
    }

    return (
        <div >
        {joined ? (
            <div>
                <Grid.Container justify="center">
                {
                    [...participants.keys()].map((participantId) => {
                        console.log(props.meetingId)
                        return ( 
                            <Grid>
                                <VideoComponent participantId={participantId} key = {participantId} />
                            </Grid>
                        )
                    }
                )}
                </Grid.Container>
                <Controls/>
            </div>
        ) : (
            <button onClick={ ()=>joinMeeting() }>Join</button>
        )}
        </div>
    );
}