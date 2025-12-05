import React from 'react';
import ThemeButton from "@/components/ui/ThemeButton/ThemeButton";
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.custom_container}>
                <h3 className={styles.nickname}>Zamchik.dev</h3>
                <nav className={styles.nav}>
                    <ul>
                        <li>Главная</li>
                        <li>Об о мне</li>
                        <li>Проекты</li>
                        <li>Контакты</li>
                    </ul>
                    <ThemeButton />
                </nav>
            </div>
        </header>
    )
}

export default Header;