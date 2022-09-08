import React, {useState} from 'react'
import { LoadingButton } from '@mui/lab'
import { localizedText } from '../locate/localizedText'
import { useMeeting, useParticipant} from '@videosdk.live/react-sdk';
import LocalizedStrings from 'react-localization'
import styled from 'styled-components';
import { IconButton } from './IconButton';
import { Card } from '@mui/material';

export const PermissionsPage =({onClick})=> {
    const [readyToJoin , setReadyToJoin] = useState(false)
    const texts =  new LocalizedStrings(localizedText)
    const { participantId } = useMeeting()
    const { webcamOn,  micOn } = useParticipant( participantId )

    const onStart = () => {
        setReadyToJoin(true)
        onClick()
    }
    
    return (
        <Container>
            <Text> {texts.accessReasonTitle} </Text>
            <IconWrapper>
                <IconButton isCamera={true}/>
                <IconButton isCamera={false}/>
            </IconWrapper>
            <LoadingButton
                loading = { !webcamOn && !micOn && readyToJoin }
                variant="contained" 
                onClick={()=> onStart()}
                >
                { texts.grantAccessButton }
            </LoadingButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center ;
    align-content: center ;
    background-color: #F5F5FA ;
    border-radius: 16px ;
    width: 30%;
    height: 30%;
    text-align: center ;
    padding: 20px;
    overflow: auto;
`
const Text = styled.h3`
    font-size: 26px ;
    font-weight: 200 ;
`
const IconWrapper = styled.div`
    display: flex;
    width: 100% ;
    height: 50% ;
    justify-content: center ;
    align-content: center ;
`