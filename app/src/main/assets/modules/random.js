import { colorThemes } from "./themes.js";


export function getRandomColorTheme() {
    const randomIndex = Math.floor(Math.random() * colorThemes.length);
    checkTHEME()
    return colorThemes[randomIndex];

}