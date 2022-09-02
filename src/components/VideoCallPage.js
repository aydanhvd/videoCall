import React, { useEffect, useState } from 'react';
import { VideoContainer } from './VideoContainer';
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { CircularProgress } from '@mui/material';
// import { authToken, createMeeting } from '../networking/API';


export const VideoCallPage = ({ meetingID, roomID, token }) => {
    // const [meetingId, setMeetingId] = useState(null)

    // const getMeetingAndToken = async () => {
    //     // const meetingId = await createMeeting({ token: authToken })
    //     setMeetingId(meetingID)
    // } 

    // useEffect(()=>{
    //     if (meetingId == null){
    //         getMeetingAndToken()
    //     }
    // },[meetingId])

    return token && meetingID ? (
        <MeetingProvider
            config={{
                meetingID,
                micEnabled: true,
                webcamEnabled: false,
            }}
            token = { token }
        >
            <MeetingConsumer>
                {() => <VideoContainer meetingId = {meetingID}/>}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <CircularProgress indeterminate />
    )
}
