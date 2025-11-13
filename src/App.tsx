import React from 'react';
import styles from './App.module.scss';
import ThemeButton from "@/components/ui/ThemeButton";
import {useTheme} from "@/components/ui/ThemeProvider";

export const App = () => {
    const { isDark } = useTheme()
    return (
        <div className={`${isDark ? styles.dark : styles.light}`}>
            <header>
                <nav className={styles.nav}>
                    <div>Об о мне</div>
                    <div>Проекты</div>
                    <div>Ссылки</div>
                    <ThemeButton/>
                </nav>
            </header>
        </div>
    );
};