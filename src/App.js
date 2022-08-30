import React from 'react';
import {RemoveScroll} from 'react-remove-scroll/UI';
import styled from 'styled-components';
import { VideoCall } from "./components/VideoCall";

export const App = () => {

  return (
    <Wrapper>
      <VideoCall/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`