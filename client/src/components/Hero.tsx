import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 60vh;
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background-color: rgb(176, 24, 202);
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(109, 20, 125);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;

const CloseButton = styled.button`
  background-color: rgb(176, 24, 202);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;

  &:hover {
    background-color: rgb(137, 24, 157);
  }
`;

const SubmitButton = styled.button`
  background-color: rgb(255, 153, 0);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;

  &:hover {
    background-color: rgb(231, 107, 25);
  }
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom:15px
`;

const SignInTitle = styled.h2`
  color: black; /* Set the color to black */
`;

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeroSection>
      <HeroContent>
        <h1>Welcome to The Bridge</h1>
        <p>Bridging the gap between learning and success</p>
        <Button to="#" onClick={openModal}>Get Started</Button>
      </HeroContent>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <SignInTitle>Sign In</SignInTitle>
            <SignInForm>
              <Input type="email" placeholder="Enter your email" required />
              <Input type="password" placeholder="Enter your password" required />
            </SignInForm>
            <ButtonsContainer>
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonsContainer>
          </ModalContainer>
        </ModalOverlay>
      )}
    </HeroSection>
  );
};

export default Hero;
