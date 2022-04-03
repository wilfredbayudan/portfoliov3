import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PageContent = styled.main`
  flex: 1 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    color: #00ceb3;
  }
`;
