import React, { useEffect, useState } from 'react';
import { authToken, createMeeting } from '../networking/API';
import { VideoContainer } from './VideoContainer';
import {
    MeetingProvider,
    MeetingConsumer
} from "@videosdk.live/react-sdk";
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';


export const VideoCallPage =()=>{
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingAndToken = async () => {
        console.log("getMeetingAndToken")
        const meetingId = await createMeeting({ token: authToken })
        console.log("meetingId", meetingId)
        setMeetingId(meetingId)
    } 

    useEffect(()=>{
        console.log("useEffect")
        getMeetingAndToken()
    },[meetingId])

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
                {() => <VideoContainer meetingId = {meetingId}/>}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <BounceLoader
            loading = {true}
            color = { Palette.ibaBlue }
            size = {"5vh"}
        />
    )
}
