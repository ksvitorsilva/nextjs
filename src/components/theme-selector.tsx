import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FaSun } from 'react-icons/fa';

const Icon = styled.a`
  position: absolute;
  right: 0;
  padding: 1%;
`;

const ThemeSelector: FC = () => {
  const [dark, setDark] = useState(false);

  const handleChanges = () => setDark(!dark);

  return (
    <Icon onClick={handleChanges}>
      <FaSun size={40} color={dark ? '#fff' : '#151c30'} />
    </Icon>
  );
};

export default ThemeSelector;
