import styles from './Button.module.css'
import cx from 'clsx'

export default function Button({ className, children, type="button" }) {
    return (
        <button className={cx(styles.button, className)} type={type}>{children}</button>
    );
}