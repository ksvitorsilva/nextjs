import styled from 'styled-components';

const StyledDiv = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;

const Container = ({ children }: Custom.ChildrenProp) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
