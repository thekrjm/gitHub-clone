import { useRef, useState } from 'react';
import cx from 'clsx';
import styles from './CreateIssue.module.css';
import Button from '../components/Button';
import TextField from '../components/TextField';

export default function CreateIssue() {
    const inputRef = useRef();
    const textareaRef = useRef();
    const [inputValues, setInputValues] = useState({title:'', body:''})
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    function handleSubmit(e){
        e.preventDefault()
        const refs = {title:inputRef, body:textareaRef}

        const validateResult = validate(inputValues);
        setErrors(validateResult);

        setIsSubmitting(true)

        const errorKeys = Object.keys(validateResult);
        if(errorKeys.length !== 0){
            const key = errorKeys[0];
            alert(validateResult[key])
            refs[key].current.focus();
            setIsSubmitting(false)

            return;
        }
        if(errorKeys.length === 0){
            console.log('Submit 성공');
        }

    }

    function onChange(e){
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]:value})
    }

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