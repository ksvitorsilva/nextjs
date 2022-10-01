/**
 * Module dependencies.
 */

import styled from 'styled-components';

/**
 * Types.
 */

type LinkProps = {
  label: string;
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
};

/**
 * Components.
 */

const StyledA = styled.a`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
`;

/**
 * Link.
 */

const Link = ({
  label,
  href,
  children,
  target = '_blank',
}: LinkProps): JSX.Element => (
  <StyledA
    href={href}
    target={target}
    rel={target === '_blank' ? 'noreferrer' : ''}
    aria-label={label}
  >
    {children}
  </StyledA>
);

/**
 * Export Link.
 */

export default Link;
