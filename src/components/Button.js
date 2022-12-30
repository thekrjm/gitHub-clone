import styles from './Button.module.css'
import cx from 'clsx'

export default function Button({ className, children }) {
    return (
        <button className={cx(styles.button, className)}>{children}</button>
    );
}