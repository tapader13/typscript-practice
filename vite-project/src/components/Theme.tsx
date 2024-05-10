import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Click</button>
    </div>
  );
};

export default Theme;
