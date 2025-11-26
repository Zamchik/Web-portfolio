import ThemeButton from "@/components/ThemeButton"
import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
                <h3 className={styles.nickname}>Zamchik.dev</h3>
                <nav className={styles.nav}>
                    <ThemeButton />
                    <ul>
                        <li>Главная</li>
                        <li>Об о мне</li>
                        <li>Проекты</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header;