import React from 'react';
import styles from './styles.module.scss';
import ThemeButton from "@/components/ui/ThemeButton/ThemeButton";
import { useTheme } from "@/components/ThemeProvider";
import Header from './components/ui/Header/Header';
import Introduction from './components/ui/Introduction/Introduction';

export const App = () => {
    const { isDark } = useTheme()
    return (
        <div className={`${isDark ? styles.dark : styles.light}`}>
            <Header />
            <main>
                <Introduction />
            </main>
        </div>
    );
};