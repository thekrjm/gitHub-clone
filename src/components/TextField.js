import { forwardRef } from 'react';
import styles from './TextField.module.css';
import cx from 'clsx';

export default forwardRef (function TextField({type='input', name, placeholder, onChange, value, error}, ref){
    return (
        type==='input' ?
        (<input
            value={value}
            onChange={onChange}
            ref={ref}
            name={name}
            className={cx(styles.input, styles.border, {[styles.error]:Boolean(error)})} 
            placeholder={placeholder}
        />):
        (<textarea
            value={value}
            onChange={onChange}
            ref={ref}
            name="body" 
            className={cx(styles.textarea, styles.input, styles.border, {[styles.error]:Boolean(error)})} 
            placeholder={placeholder}
        />)
    )
})