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
    background:rgb(0,0,0, 0.5);
    justify-content: center;
    column-gap: 50px;
    padding: 10px;
    width: 100% ;
    position: absolute;
    bottom: 0;
`