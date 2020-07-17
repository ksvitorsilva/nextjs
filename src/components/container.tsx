import React, { FC, ReactChildren } from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;

type ContainerProps = {
  children: ReactChildren;
};

const Container: FC = ({ children }: ContainerProps) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default Container;
