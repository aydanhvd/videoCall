import React, { useEffect, useState } from 'react';
import { authToken, createMeeting } from '../networking/API';
import { VideoContainer } from './VideoContainer';
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';


export const VideoCallPage = ({ meetingID, roomID, token }) => {
    const [meetingId, setMeetingId] = useState(null)

    const getMeetingAndToken = async () => {
        const meetingId = await createMeeting({ token: authToken })
        setMeetingId(meetingId)
    } 

    useEffect(()=>{
        if (meetingId == null){
            getMeetingAndToken()
        }
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
            size = { "5vh" }
        />
    )
}
