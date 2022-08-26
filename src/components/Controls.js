import React from 'react';
import { useMeeting } from '@videosdk.live/react-sdk';

export const Controls = () => {
    const {leave, toggleMic, toggleWebcam} = useMeeting()
    return (
        <div>
            <button onClick={leave}>Leave</button>
            <button onClick={() => toggleMic() }>Toggle Mic</button>
            <button onClick={() => toggleWebcam()}>Toggle Webcam</button>
        </div>
    )
}