import React, { useContext, useState } from "react";
import './ThemeMode.css'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { ThemeContext } from './../../../common/Context/ContextThemeMode';


const ThemeMode = () => {

    const ThemeMode = useContext(ThemeContext)
    console.log(ThemeMode)

    return (
        <div className="themeMode">
            {ThemeMode.lightMode ?
                <MdDarkMode onClick={_ => ThemeMode.switchThemeMode()} />
                :
                <MdLightMode onClick={_ => ThemeMode.switchThemeMode()} />}
        </div>
    )
}

export default ThemeMode