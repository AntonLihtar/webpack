import {Theme, THEME_KEY, ThemeContext} from "./ThemeContext";
import React, {useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.NORMAL;
export type ThemeProviderProps = {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => (
        {
            theme: theme,
            setTheme: setTheme,
        }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}