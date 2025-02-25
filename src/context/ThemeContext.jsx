/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState()
    const htmlClassList = document.querySelector('html').classList

    // localStorage.setItem("my-theme", theme)

    console.log(theme)

    const toggleTheme = () => {
        const updatedTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(updatedTheme);

        // console.log(htmlClassList.value)
        if(theme  == 'dark') {
            htmlClassList.replace("light", theme)
        } else {
            htmlClassList.replace("dark", theme)
        }
            

    }

    //  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

     return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
     )
}