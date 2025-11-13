import React from 'react';
import styles from './App.module.scss';

export const App = () => {
    return (
        <div>
            <header>
                <nav className={styles.nav}>
                    <div>Об о мне</div>
                    <div>Проекты</div>
                    <div>Ссылки</div>
                    <button></button>
                </nav>
            </header>
        </div>
    );
};