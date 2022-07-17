import styled from 'styled-components';

const A = styled.a`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
`;

type HeaderProps = {
  href: string;
  children: React.ReactNode;
  target?: '_blank' | '_parent' | '_self' | '_top';
};

const Link = ({
  href,
  children,
  target = '_blank',
}: HeaderProps): JSX.Element => (
  <A href={href} target={target} rel={target === '_blank' ? 'noreferrer' : ''}>
    {children}
  </A>
);

export default Link;
