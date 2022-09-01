import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import React, { useEffect, useMemo, useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';



export function VideoPlayer (props) {
    const micRef = useRef(null);

    const {
        webcamStream, 
        micStream, 
        webcamOn, 
        micOn
    } = useParticipant(
        props.participantId
    )

    const { toggleWebcam } = useMeeting()

    useEffect (()=>{
        if (!webcamOn){
            toggleWebcam()
        }
    })

    const videoStream = useMemo(() => {
        if (webcamOn) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);
    
    useEffect(() => {
        if (micRef.current) {
            if (micOn) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);
        
                micRef.current.srcObject = mediaStream;
                micRef.current
                .play()
                .catch((error) =>
                    <Alert severity="error">{error}</Alert>
                );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);
    
    return (
        <PlayerWrapper key={ props.participantId }>
            {webcamOn ? (
                <ReactPlayer
                    playsinline
                    pip={false}
                    light={false}
                    controls={false}
                    muted={true}
                    playing={true}
                    width = "100%"
                    height="100%"
                    style = {{ 
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "black"
                    }}
                    url={videoStream}
                    onError={(err) => {
                        <Alert severity="error">{err}</Alert>
                }}/>
            ) :(
                <BounceLoader
                    loading = {true}
                    color = { Palette.ibaBlue }
                    size = {"5vh"}
                />
            )
            }
        </PlayerWrapper>
    );
}

const PlayerWrapper = styled.div`
    box-sizing: border-box;
`
