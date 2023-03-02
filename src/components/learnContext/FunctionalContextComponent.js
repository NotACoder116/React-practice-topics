import React, { useContext } from 'react'
import { ThemeContext } from './MainContext'

export const FunctionalContextComponent = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div>FunctionalContextComponent - {darkTheme ? "This is true" : "This is false"}</div>
  )
}
