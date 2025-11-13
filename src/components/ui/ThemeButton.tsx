import {useContext} from "react";
import {ThemeContext, useTheme} from "@/components/ui/ThemeProvider";
import {themeIcons} from "@/assets";

const ThemeButton = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        <img
            src={isDark ? themeIcons.light : themeIcons.dark}
            width={30}
            alt="theme"
            onClick={toggleTheme}>
        </img>
    )
}

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//
//     if (!context) {
//         throw new Error("context error")
//     }
//     return context
// }

export default ThemeButton;