import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;
type TypesContainer = {
  children: ReactNode;
};

const Container: FC = ({ children }: TypesContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
