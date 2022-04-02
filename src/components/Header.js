import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const HeaderWrapper = styled.header``;

const NavBar = styled.nav`
  border-bottom: 1px solid #e5e5e5;
  padding: 15px;
  height: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    height: 50px;
  }
  span {
    font-family: "Bebas Neue", cursive;
    font-size: 2.5em;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Wilfred Bayudan" />
          <span>AYUDAN</span>
        </LogoContainer>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
