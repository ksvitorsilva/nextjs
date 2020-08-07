import React, { useContext, FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled, { ThemeContext } from 'styled-components';

type TypesThemeSelector = {
  theme: string;
  toggle: () => void;
};

const Container = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`;

const ThemeSelector: FC<TypesThemeSelector> = ({
  toggle,
  theme,
}: TypesThemeSelector) => {
  const { colors } = useContext(ThemeContext);
  const ICON_SIZE = 35;
  const COLOR = colors.primary;

  return (
    <Container onClick={toggle}>
      {theme === 'dark' ? (
        <FaSun size={ICON_SIZE} color={COLOR} />
      ) : (
        <FaMoon size={ICON_SIZE} color={COLOR} />
      )}
    </Container>
  );
};

export default ThemeSelector;
