import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../styles/common";

const SplashContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Splash = () => {
  return (
    <Section>
      <SplashContainer>WILFRED BAYUDAN</SplashContainer>
    </Section>
  );
};

export default Splash;
