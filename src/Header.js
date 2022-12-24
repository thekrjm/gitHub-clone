import styles from './Header.module.css'
import Button from './components/Button.js'
import Space from './components/Space.js'
import Taps from './components/Tabs.js'


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.buttonContainer}>
                <Button style={{
                    fontSize: "14px",
                    backgroundColor: "transparent",
                    color: "black"
                }}>
                    Watch<div className={styles.circle}>5</div>
                </Button>
                <Space />
                <Button style={{
                    fontSize: "14px",
                    backgroundColor: "transparent",
                    color: "black"
                }}>
                    Fork
                </Button>
                <Space />
                <Button style={{
                    fontSize: "14px",
                    backgroundColor: "transparent",
                    color: "black"
                }}>
                    Star
                </Button>
            </div>
            <Taps />
        </div>
    )
}