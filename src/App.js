import React from 'react'; 
import styled from 'styled-components';
import { VideoCallPage } from "./components/VideoCallPage";
import { Route, Routes, useParams } from 'react-router-dom';


export const App = () => {

  const { meetingID, roomID, token } = useParams()

  return (
    <Wrapper>
      <Routes>
        <Route 
          path="/" 
          element = {
            <VideoCallPage
              meetingID = { meetingID }
              roomID = { roomID }
              token = { token }
            />
          } 
        />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh; 
  display: flex ;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`