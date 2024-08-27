import {Theme, THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL
        setTheme(newTheme)
        localStorage.setItem(THEME_KEY, newTheme)
    }
    return {
        toggleTheme,
        theme
    };
}