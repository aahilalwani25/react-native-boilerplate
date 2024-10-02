import { View, Text, useColorScheme } from 'react-native'
import React,{ createContext, useContext, useState } from 'react'
import { darkTheme, lightTheme } from './src/utils/colors';
const ThemeContext= createContext();

export const ThemeProvider = ({children}) => {
    const colorScheme= useColorScheme()
    const [isDarkTheme,setIsDarkTheme]= useState(colorScheme==='dark');

    const toggleTheme= ()=>{
        setIsDarkTheme((prev)=>!prev)
    }

    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
    <ThemeContext.Provider value={{
        isDarkTheme,
        toggleTheme,
        theme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme=()=>useContext(ThemeContext);