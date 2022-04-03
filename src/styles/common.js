import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageContent = styled.main`
  flex: 1 0 auto;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    color: #00ceb3;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 80vh;
  @media (min-width: 1200px) {
    max-height: 1200px;
  }
`;
