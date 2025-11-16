import React from 'react';
import styles from './App.module.scss';
import ThemeButton from "@/components/ui/ThemeButton";
import {useTheme} from "@/components/ui/ThemeProvider";

export const App = () => {
    const { isDark } = useTheme()
    return (
        <body className={`${isDark ? styles.dark : styles.light}`}>
            <header className={styles.header}>
                <div className={styles.nickname}>Zamchik.dev</div>
                <nav className={styles.nav}>
                    <div>Об о мне</div>
                    <div>Проекты</div>
                    <div>Контакты</div>
                    <ThemeButton/>
                    <div><div
                </nav>
            </header>
            
        </body>
    );
};