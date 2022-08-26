import React, {useState} from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';
import { Controls } from './Controls';
import { VideoComponent } from './VideoComponent';


export const Container=(props)=>{
    const [joined, setJoined] = useState(false);
    const {leave, join, toggleMic, toggleWebcam} = useMeeting()
    const { participants } = useMeeting();
    const joinMeeting = () => {
        setJoined(true);
        // toggleWebcam()
        // //toggleMic()
        join()
    }

    return (
        <div className="container">
        <h3>Meeting Id: {props.meetingId}</h3>
        {joined ? (
            <div>
            {/* <Controls /> */}
            {[...participants.keys()].map((participantId) => (
                <VideoComponent participantId={participantId} key = {participantId} />
            ))}
            </div>
        ) : (
            <button onClick={ ()=>joinMeeting() }>Join</button>
        )}
        </div>
    );
}