import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { VideoCallPage } from "./components/VideoCallPage";

export const App = () => {

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element = {<VideoCallPage/>} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100vh; 
  display: flex ;
  justify-content: center;
  align-items: center;
  
`