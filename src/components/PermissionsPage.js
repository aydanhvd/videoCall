import React, {useState} from 'react'
import { LoadingButton } from '@mui/lab'
import { localizedText } from '../locale/localizedText'
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
                style = {{ backgroundColor: "#2058BB"}}
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
    width: 20%;
    height: 30%;
    text-align: center ;
    padding: 20px;
    overflow: auto;
`
const Text = styled.h3`
    font-size: 22px ;
    font-weight: 500 ;
`
const IconWrapper = styled.div`
    display: flex;
    width: 100% ;
    height: 50% ;
    justify-content: center ;
    align-content: center ;
    align-items: center ;
`