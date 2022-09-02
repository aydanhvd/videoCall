import React, { useEffect, useState } from 'react';
import { authToken, createMeeting } from '../networking/API';
import { VideoContainer } from './VideoContainer';
import { MeetingProvider, MeetingConsumer } from "@videosdk.live/react-sdk";
import { MoonLoader } from 'react-spinners';
import { Palette } from '../palette/theme';


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
        <MoonLoader
            loading = {true}
            color = { Palette.ibaBlue }
            size = { "5vh" }
        />
    )
}
