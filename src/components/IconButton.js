import React from 'react'
import styled from 'styled-components';
import LocalizedStrings from 'react-localization';
import { localizedText } from '../utils/locale/localizedText';
import { device } from '../utils/responsiveSize';
import { BiCamera } from "react-icons/bi"
import { BsMic } from "react-icons/bs"

export const IconButton =({isCamera})=>{
const texts =  new LocalizedStrings(localizedText)

    return (
        <Wrapper>
            { 
                isCamera 
                ? (
                    <IconWrapper>
                        <BiCamera />
                    </IconWrapper>
                ) : (
                    <IconWrapper>
                        <BsMic/>
                    </IconWrapper>
                )
            }
            <Text>
                {   isCamera 
                    ? texts.cameraTitle 
                    : texts.microphoneTitle
                }
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    align-content: center ;
    align-items: center ;
    padding: 2vh ;
    @media ${device.mobileL} { 
        padding: 3vh ;
    }
`
const IconWrapper = styled.div`
    color:  white;
    display: flex ;
    background-color: #3B8DD4;
    align-content: center ;
    justify-content: center ;
    padding: 15px;
    border-radius: 200px;
    font-size: 20px;
`
const Text = styled.h3`
    font-size: 16px ;
    font-weight: 500 ;

    @media ${device.mobileS} { 
        font-size: 12px ;
        font-weight: 500 ;
    }

    @media ${device.mobileM} { 
        font-size: 14px ;
        font-weight: 500 ;
    }
`
