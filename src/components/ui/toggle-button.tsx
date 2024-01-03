import { FC, memo } from 'react';
import styled, { useTheme } from 'styled-components';

const StyledCheckbox = styled.input`
    display: none;
`;

const StyledLabel = styled.label`
    content: '';
    display: inline-block;
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out; 
      
    ${StyledCheckbox}:not(:checked) + & {
      background-color: gold;
    }

    ${StyledCheckbox}:checked + & {
      background-color: transparent;
      box-shadow: inset -12px -6px 1px 1px #fff;  
    }
`;

export const ToggleButton: FC = memo(() => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <StyledCheckbox type="checkbox" id="toggle" checked={isDarkMode} onChange={toggleTheme} />
      < StyledLabel htmlFor="toggle" />
    </>
  );
});
