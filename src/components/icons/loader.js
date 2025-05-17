// src/components/loader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.5; }
`;

const draw = keyframes`
  0% { stroke-dashoffset: 300; }
  100% { stroke-dashoffset: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// Wrap the whole SVG so it continuously spins
const Spinner = styled.svg`
  width: 100px;
  height: 100px;
  animation: ${spin} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  overflow: visible;
`;

// Style the polygon path: set dasharray equal-ish to path length,
// then animate dashoffset from full → 0 to "draw" it on screen
const OuterRing = styled.circle`
  fill: none;
  stroke: var(--green);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  animation: ${draw} 2s ease-in-out forwards;
  transform-origin: center;
  transform: rotate(-90deg);
`;

const InnerRing = styled.circle`
  fill: none;
  stroke: var(--green);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: ${draw} 2s ease-in-out forwards 0.5s;
  transform-origin: center;
  transform: rotate(-90deg);
`;

// Fade in the "S" after the draw is done
const Letter = styled.text`
  fill: var(--green);
  font-size: 40px;
  font-family: var(--font-mono);
  font-weight: bold;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards 2s;
  transform-origin: center;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const IconLoader = () => (
  <Spinner viewBox="0 0 100 100">
    <OuterRing cx="50" cy="50" r="45" />
    <InnerRing cx="50" cy="50" r="30" />
    <Letter x="35" y="65">S</Letter>
  </Spinner>
);

export default IconLoader;



/*
import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        {/* <path
          d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
          fill="currentColor"
        /> */  /* }

        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                    L 11, 27
                    L 11, 72
                    L 50, 95
                    L 89, 73
                    L 89, 28 z"
        />
      </g>
      <text x="30" y="70" fill="currentColor" fontSize="55px" fontFamily="Consolas, serif">
        C
      </text>
    </svg>
  );
  
  export default IconLoader;
  */
 
