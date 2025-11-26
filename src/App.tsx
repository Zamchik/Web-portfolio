import React from 'react';
import styles from './styles.module.scss';
import ThemeButton from "@/components/ThemeButton";
import { useTheme } from "@/components/ThemeProvider";
import Header from './components/ui/Header/Header';

export const App = () => {
    const { isDark } = useTheme()
    return (
        <div className={`${isDark ? styles.dark : styles.light}`}>
            <Header />
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