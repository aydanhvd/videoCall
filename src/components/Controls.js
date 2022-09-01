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
    justify-content: center;
    align-items: center;
    height: 9% ;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
`