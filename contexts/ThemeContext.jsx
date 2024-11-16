import { createContext, useState } from "react";
export default ThemeContext = createContext()

export function ThemeProvider({children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return (
        <ThemeContext.Provider value={[isDark, setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}