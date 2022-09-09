import React, {useState} from 'react'
import { LoadingButton } from '@mui/lab'
import { localizedText } from '../utils/locale/localizedText'
import { useMeeting, useParticipant} from '@videosdk.live/react-sdk';
import LocalizedStrings from 'react-localization'
import styled from 'styled-components';
import { IconButton } from './IconButton';
import { device } from '../utils/responsiveSize';
import { makeStyles } from "@material-ui/core";

export const PermissionsPage =({onClick})=> {
    const [readyToJoin , setReadyToJoin] = useState(false)
    const texts =  new LocalizedStrings(localizedText)
    const { participantId } = useMeeting()
    const { webcamOn,  micOn } = useParticipant( participantId )
    const classes = useStyles();

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
                className={classes.button}
                loading = { !webcamOn && !micOn && readyToJoin }
                variant="contained" 
                style = {{ backgroundColor: "#2058BB"}}
                onClick={()=> onStart()}
                >
                <span className={classes.buttonText}>
                    {texts.grantAccessButton}
                </span>
            </LoadingButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column ;
    justify-content: center ;
    align-content: center ;
    text-align: center ;
    background-color: #F5F5FA ;
    border-radius: 16px ;
    width: 20%;
    height: 30%;
    padding: 20px;

    @media ${device.mobileS} { 
        width: 80%;
        height: 45%;
        padding: 20;
        border-radius: 8px ;
    }

    @media ${device.laptop} { 
        width: 20%;
        padding: 20;
        border-radius: 8px ;
    }

    @media ${device.tablet} { 
        width: 30%;
        height: 30%;
        font-size: 22px ;
        font-weight: 500 ;
    }
`
const Text = styled.h3`
    font-size: 26px ;
    font-weight: 500 ;

    @media ${device.mobileS} { 
        font-size: 10px ;
        font-weight: 200 ;
    }
    @media ${device.mobileM} { 
        font-size: 18px ;
        font-weight: 500 ;
    }
    @media ${device.tablet} { 
        font-size: 22px ;
        font-weight: 500 ;
    }
`
const IconWrapper = styled.div`
    display: flex;
    width: 100% ;
    height: 50% ;
    justify-content: center ;
    align-content: center ;
    align-items: center ;
`

const useStyles = makeStyles(theme => ({
    button: {
        display:'flex', 
        alignContent: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("sm")]: {
            height: 40,
        },
        [theme.breakpoints.down("s")]: {
            height: 20,
        }
    },
    buttonText: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            fontSize: 12,
        },
        [theme.breakpoints.down("s")]: {
            fontSize: 10,
        }
    }
}));
