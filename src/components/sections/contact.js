import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import SplineScene from '../../components/SplineScene';

const StyledContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 100px;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 1080px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    margin: 0 auto 50px;
    flex-direction: column;
    padding: 50px 0;
  }

  .contact-content {
    flex: 1;
    max-width: 600px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    margin-bottom: 20px;
  }

  p {
    margin: 20px 0;
    font-size: var(--fz-lg);
    line-height: 1.5;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
  }

  .spline-container {
    flex: 1;
    width: 600px;
    height: 500px;
    position: relative;

    @media (max-width: 1080px) {
      width: 500px;
      height: 400px;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 350px;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <div className="contact-content">
        <h2 className="numbered-heading overline">What's Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          I'm actively seeking new opportunities and would love to hear from you. 
          Whether you have a project idea, a question, or just want to connect, feel free to reach out—I'll do my best to respond!
        </p>

        <a className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
      </div>

      <div className="spline-container">
        <SplineScene />
      </div>
    </StyledContactSection>
  );
};

export default Contact;
