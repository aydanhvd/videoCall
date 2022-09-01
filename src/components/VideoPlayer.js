import { useMeeting, useParticipant } from '@videosdk.live/react-sdk';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import { BounceLoader } from 'react-spinners';
import { Palette } from '../palette/theme';
import { LoadingButton } from '@mui/lab';



export function VideoPlayer (props) {
    const micRef = useRef(null);
    const webcamRef = useRef(null);
    const [webCamStarted , setWebCamStarted] = useState(false)
    const {
        webcamStream, 
        micStream, 
        webcamOn, 
        micOn
    } = useParticipant(
        props.participantId
    )
    const { toggleWebcam } = useMeeting()

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

    const onStart = ()=>{
        setWebCamStarted(true)
        toggleWebcam()
    }
    
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
            { webcamOn ? (
                <ReactPlayer
                    playsinline // very very imp prop
                    pip = { false }
                    light = { false }
                    muted = { false }
                    playing = { true }
                    url = { videoStream }
                    controls = { false }
                    ref = { webcamRef }
                    width = "100%"
                    height = "100%"
                    style = {{ 
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "black"
                    }}
                    onError={(error) => {}}
                />
            ) : (
                <LoadingButton
                loading = { !webcamOn && webCamStarted }
                variant="contained" 
                onClick={()=> onStart()}
                >
                    Başla 
                </LoadingButton>
            )
        }
        </PlayerWrapper>
    );
}

const PlayerWrapper = styled.div`
    box-sizing: border-box;
`