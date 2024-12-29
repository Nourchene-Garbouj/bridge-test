import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px; 
  height: auto;
  margin: 0;
  display: block;
`;


const Navbar = () => {
  return (
    <Nav>
      <Logo src="/assets/kantraLogo.png" alt="The Bridge Logo" />
    
    </Nav>
  );
};

export default Navbar;
