import styles from './Header.module.css'
import Button from './components/Button.js'
import Space from './components/Space.js'
import Taps from './components/Tabs.js'


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerTitle}>JMR/gitHub-clone</div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.headerBtn}>
                        Watch<div className={styles.circle}>5</div>
                    </Button>
                    <Space />
                    <Button className={styles.headerBtn}>
                        Fork
                    </Button>
                    <Space />
                    <Button className={styles.headerBtn}>
                        Star
                    </Button>
                </div>
            </div>
            <Taps />
        </div>
    )
}