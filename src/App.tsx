import React from 'react';
import styles from './App.module.scss';
import ThemeButton from "@/components/ui/ThemeButton";
import { useTheme } from "@/components/ui/ThemeProvider";

export const App = () => {
    const { isDark } = useTheme()
    return (
        <div className={`${isDark ? styles.dark : styles.light}`}>
            <header className={styles.header}>
                <h3 className={styles.nickname}>Zamchik.dev</h3>
                <nav className={styles.nav}>
                    <ThemeButton />
                    <ul>
                        <li>Об о мне</li>
                        <li>Проекты</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </header>
            <div>
                <main>
                    <div>
                        <div className={styles.greetContainer_header}>
                            <h1 className={styles.greetContainer}>
                                <span className={styles.greetContainer_name}>Константин</span>
                                <span className={styles.greetContainer_name}>Замякин</span>
                            </h1>
                        </div>
                        <div>
                            <h2>Frontend Developer</h2>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};