import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const HeaderWrapper = styled.header``;

const NavBar = styled.nav`
  border-bottom: 1px solid #e5e5e5;
  padding: 10px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 15px;
    height: 50px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 100%;
  img {
    height: 100%;
  }
  span {
    display: none;
    font-family: "Bebas Neue", cursive;
    font-size: 2.5em;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const NavLinks = styled.ul``;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Wilfred Bayudan" />
          <span>AYUDAN</span>
        </LogoContainer>
        <NavLinks>LINKS</NavLinks>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
