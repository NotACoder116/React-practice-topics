import React, { createContext, useState } from 'react'
import ClassContextComponent from './ClassContextComponent';
import { FunctionalContextComponent } from './FunctionalContextComponent';

export const ThemeContext = createContext();
export const MainContext = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme} >Click Me</button>
        <FunctionalContextComponent />
        <ClassContextComponent />
    </ThemeContext.Provider>
  )
}
