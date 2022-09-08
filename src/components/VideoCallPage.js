import React, { useEffect, useState } from 'react';
import { VideoContainer } from './VideoContainer';
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { CircularProgress } from '@mui/material';
import { token, createMeeting } from '../networking/API';



export const VideoCallPage = () => { //{ meetingID, roomID, token }
    const [meetingID, setMeetingId] = useState(null)

    const getMeetingAndToken = async () => {
        const meetingID = await createMeeting({ token: token })
        setMeetingId(meetingID)
    } 

    useEffect(()=>{
        if (meetingID == null){
            getMeetingAndToken()
        }
    },[meetingID])

    return token && meetingID ? (
        <MeetingProvider
            config={{
                meetingId: meetingID,
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
