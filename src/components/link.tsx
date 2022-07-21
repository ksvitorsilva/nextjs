import styled from 'styled-components';

type HeaderProps = {
  label: string;
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
};

const StyledA = styled.a`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
`;

const Link = ({
  label,
  href,
  children,
  target = '_blank',
}: HeaderProps): JSX.Element => (
  <StyledA
    href={href}
    target={target}
    rel={target === '_blank' ? 'noreferrer' : ''}
    aria-label={label}
  >
    {children}
  </StyledA>
);

export default Link;
