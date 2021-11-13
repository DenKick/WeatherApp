import styled from 'styled-components/native';
import React, { useContext } from 'react';

import { ThemeContext } from '../themes';

const StyledText = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 25px;
  text-align: center;
`;

interface IProps {
  children: string;
}

const Text: React.FC<IProps> = ({ children }) => {
  const theme = useContext(ThemeContext);
  return <StyledText color={theme.colors.secondary}>{children}</StyledText>;
};

export default Text;
