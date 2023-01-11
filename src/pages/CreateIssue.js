import { useRef, useState } from 'react';
import cx from 'clsx';
import styles from './CreateIssue.module.css';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { useForm } from '../hooks';

export default function CreateIssue() {
    const inputRef = useRef();
    const textareaRef = useRef();
    const {inputValues,  onChange,isSubmitting,errors,handleSubmit} = useForm
    ({
        validate,
        initialValues:{title:'', body:''},
        refs:{title:inputRef, body: textareaRef},
        onSubmit:()=>console.log('완료'),

    })

    return (
        <div className={styles.container}>
            <div className={styles.avatar}></div>
            <div className={cx(styles.inputWrapper, styles.border)}>
                <form onSubmit={handleSubmit}>
                    <TextField  
                        ref={inputRef}
                        name='title' 
                        placeholder="Title"
                        value={inputValues.title}
                        onChange={onChange}
                        error={errors.title}
                    />
                    <TextField 
                        ref={textareaRef}
                        type="textarea" 
                        name='body' 
                        placeholder="Leave a comment"
                        value={inputValues.body}
                        onChange={onChange}
                        error={errors.body}
                    />
                    <div className={styles.buttonWrapper}>
                        <Button 
                            type="submit"
                            className={styles.button}
                            disabled={isSubmitting}
                        > 
                            Submit new issue
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function validate(values){
    let errors = {}
    if(values.title===''){
        errors = {title:'타이틀은 필수로 입력해주세요.'}
    }
    return errors;
}