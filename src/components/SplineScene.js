import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Spline from '@splinetool/react-spline';

// Global style to hide Spline watermark
const GlobalStyle = createGlobalStyle`
  .spline-watermark {
    display: none !important;
  }
`;

const HideSplineWatermark = createGlobalStyle`
  /* hide any "Built with Spline" link */
  a[href*="spline.design"] {
    display: none !important;
  }
`;

const SplineWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 1;

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  &.expanded {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(5px);
  }
`;

const SplineScene = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <GlobalStyle />
      <HideSplineWatermark />
      <SplineWrapper 
        className={expanded ? 'expanded' : ''}
        onClick={() => setExpanded(!expanded)}
      >
        <Spline
          scene="https://prod.spline.design/qE3gPw2Cbc56NApH/scene.splinecode"
          className="spline-scene"
        />
      </SplineWrapper>
    </>
  );
};

export default SplineScene; 