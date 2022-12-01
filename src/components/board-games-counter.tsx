/**
 * Module dependencies.
 */

import boardGames from '../data/board-games';
import styled from 'styled-components';
import { FC } from 'react';

/**
 * Components.
 */

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;
  left: 0;
  padding: 1rem;
  position: absolute;
  top: 0;
  z-index: 10;
`;

/**
 * BoardGamesCounter.
 */

const BoardGamesCounter: FC = () => <StyledDiv>{boardGames.length}</StyledDiv>;

/**
 * Export BoardGamesCounter.
 */

export default BoardGamesCounter;
