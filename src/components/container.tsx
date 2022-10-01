/**
 * Module dependencies.
 */

import styled from 'styled-components';

/**
 * Components.
 */

const StyledDiv = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;

/**
 * Container.
 */

const Container = ({ children }: Custom.ChildrenProp) => {
  return <StyledDiv>{children}</StyledDiv>;
};

/**
 * Export Container.
 */

export default Container;
