import {createContext } from "react";
import { theme } from "./Theme";

type ThemeContextprops = {
    children:React.ReactNode;
}

export const ThemeContext = createContext(theme);

export const themeContextProvider = ({children}:ThemeContextprops) =>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}