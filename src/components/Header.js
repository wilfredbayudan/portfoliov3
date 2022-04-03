import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const HeaderWrapper = styled.header``;

const NavBar = styled.nav`
  border-bottom: 1px solid #e5e5e5;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 80px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 5px;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 15px;
  }

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

const NavLinks = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: inline-flex;
`;

const FullNav = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

const Link = styled.li`
  list-style-type: none;
  margin: 0 20px;
  height: 100%;
  padding: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  display: flex;
  align-items: center;
  transition: all 150ms linear;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #10c8fe;
  }
`;

const ContactBtn = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  border: none;
  background-color: #aaffff;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms linear;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    background-color: #5cffff;
  }
  @media (min-width: 768px) {
    margin: 20px;
  }
`;

const StyledMailIcon = styled(MailOutlineIcon)``;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Wilfred Bayudan" />
          <span>AYUDAN</span>
        </LogoContainer>
        <NavLinks>
          <FullNav>
            <Link>About</Link>
            <Link>Work</Link>
            <Link>Skills</Link>
            <Link>Resume</Link>
          </FullNav>
          <ContactBtn>
            <StyledMailIcon /> Contact
          </ContactBtn>
        </NavLinks>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
