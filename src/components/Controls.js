import React from 'react';
import styled from 'styled-components';
import { MicButton } from '../commons/MicButton';
import { EndCallButton } from '../commons/EndButton';
import { WebCamButton } from '../commons/VideoCamButton';


export const Controls = () => {

    return (
        <Wrapper>
            <MicButton/>
            <EndCallButton/>
            <WebCamButton/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background:rgb(225,255,225, 0.3);
    justify-content: center;
    height: 9% ;
    width: 100% ;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    align-content: center;
`