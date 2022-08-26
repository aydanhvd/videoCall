import React, { useState } from 'react';
import { authToken, createMeeting } from '../networking/API';
import { JoinScreen } from './JoinScreen';
import { Container } from './Container';

import {
    MeetingProvider,
    MeetingConsumer
} from "@videosdk.live/react-sdk";


export const VideoCall=()=>{
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingAndToken = async (id) => {
        const meetingId = id == null ? await createMeeting({ token: authToken }) :  id
        setMeetingId(meetingId)
    } 

    return authToken && meetingId ? (
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: false,
            }}
            token={authToken}
        >
            <MeetingConsumer>
            {() => <Container meetingId = {meetingId}/>}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen getMeetingAndToken={getMeetingAndToken}/>
    )
}
