import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeModeProvider = ({children}) => {

    const [lightMode, setLightMode] = useState(true)

    function switchThemeMode(){
        setLightMode(lastLightMode => !lastLightMode)
    }

    return(
        <ThemeContext.Provider value={{lightMode, switchThemeMode}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeModeProvider