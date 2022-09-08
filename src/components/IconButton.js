import React from 'react'
import { CameraAltOutlined , MicNoneOutlined} from '@mui/icons-material';
import styled from 'styled-components';
import LocalizedStrings from 'react-localization';
import { localizedText } from '../locale/localizedText';



export const IconButton =({isCamera})=>{
const texts =  new LocalizedStrings(localizedText)
    return (
        <Wrapper>
            { 
                isCamera ?
                <CameraAltOutlined 
                fontSize = 'medium'
                style={{...IconStyles}}
                />
                :
                <MicNoneOutlined
                    fontSize = 'medium'
                    style={{...IconStyles}}
                />
            }
            <Text>{isCamera ? texts.cameraTitle : texts.microphoneTitle}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-content: center ;
    align-items: center ;
    padding: 2vh ;

`
const Text = styled.h3`
    font-size: 16px ;
    font-weight: 500 ;
`
const IconStyles = {
    color: 'white',
    backgroundColor: '#3B8DD4',
    padding: '15px',
    borderRadius: '200px',
    margin:'10px'
}