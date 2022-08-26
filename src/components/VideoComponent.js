import { useParticipant } from '@videosdk.live/react-sdk';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import useResponsiveSize from "../utils/useResponsiveSize";
import { red, green } from "@material-ui/core/colors";
import ReactPlayer from 'react-player';
import {
    TextField,
    Box,
    Button,
    InputAdornment,
    useTheme,
    Grid,
    makeStyles,
    IconButton,
    Tooltip,
    Typography,
} from "@material-ui/core";

import {
    Person,
    VideocamOff,
    MicOff,
    Mic,
    Videocam,
    ArrowBack,
} from "@material-ui/icons";

export function VideoComponent(props) {
    const micRef = useRef(null);
    const videoPlayerRef = useRef();
    const theme = useTheme();
    const styles = useStyles(theme);

    const padding = useResponsiveSize({
        xl: 6,
        lg: 6,
        md: 6,
        sm: 4,
        xs: 1.5,
    });

    const {
        webcamStream, 
        micStream, 
        webcamOn, 
        micOn 
    } = useParticipant(
        props.participantId
    );

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
                    console.error("videoElem.current.play() failed", error)
                );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);
    
    return (
        <div key={props.participantId}>
            {micOn && micRef && <audio ref={micRef} autoPlay />}
            {webcamOn && (
                <ReactPlayer
                    playsinline 
                    pip={false}
                    light={false}
                    controls={true}
                    muted={true}
                    playing={true}
                    //
                    url={videoStream}
                    //
                    height={"1000px"}
                    width={"1000px"}
                    onError={(err) => {
                        console.log(err, "participant video error");
                    }
            }
            />
            )
        }
        </div>
    );
}

const useStyles = makeStyles((theme)=>({
    video: {
        borderRadius: "10px",
        backgroundColor: "#1c1c1c",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    
    toggleButton: {
        borderRadius: "100%",
        minWidth: "auto",
        width: "44px",
        height: "44px",
    },
    
    previewBox: {
        width: "100%",
        height: "45vh",
        position: "relative",
    },
}))


