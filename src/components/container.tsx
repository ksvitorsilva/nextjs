import styled from 'styled-components';

const StyledContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;

const Container = ({ children }: Custom.ChildrenProp) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
