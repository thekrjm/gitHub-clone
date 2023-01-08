import { useRef } from 'react';
import cx from 'clsx';
import styles from './CreateIssue.module.css';
import Button from '../components/Button';

export default function CreateIssue() {
    const ref = useRef();
    function handleSubmit(e){
        e.preventDefault()
        if(e.target.elements.title.value===''){
            alert('제목을 입력해주세요.')
        }
        ref.current.focus();
    }
    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>
            <div className={cx(styles.inputWrapper, styles.border)}>
                <form onSubmit={handleSubmit}>
                    <input
                        name='title'
                        ref={ref}
                        className={cx(styles.input, styles.border)} placeholder="Title"
                    />
                    <textarea
                        name="body" 
                        className={cx(styles.textarea, styles.input, styles.border)} placeholder="Leave a comment"></textarea>
                    <div className={styles.buttonWrapper}>
                        <Button 
                            type="submit"
                            className={styles.button}> Submit new issue</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
