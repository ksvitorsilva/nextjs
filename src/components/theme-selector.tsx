/**
 * Module dependencies.
 */

import styled, { ThemeContext } from 'styled-components';
import { FC, useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

/**
 * Types.
 */

type TypesThemeSelector = {
  theme: string;
  toggle: () => void;
};

/**
 * Components.
 */

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 10;
`;

/**
 * ThemeSelector.
 */

const ThemeSelector: FC<TypesThemeSelector> = ({
  toggle,
  theme,
}: TypesThemeSelector) => {
  const { colors } = useContext(ThemeContext);
  const ICON_SIZE = 35;
  const COLOR = colors.primary;

  return (
    <StyledSpan onClick={toggle}>
      {theme === 'dark' ? (
        <FaSun size={ICON_SIZE} color={COLOR} />
      ) : (
        <FaMoon size={ICON_SIZE} color={COLOR} />
      )}
    </StyledSpan>
  );
};

/**
 * Export ThemeSelector.
 */

export default ThemeSelector;
