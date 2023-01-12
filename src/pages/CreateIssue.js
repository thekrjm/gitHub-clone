import { useRef } from 'react';
import cx from 'clsx';
import axios from 'axios';

import { useForm } from '../hooks';
import styles from './CreateIssue.module.css';
import Button from '../components/Button';
import TextField from '../components/TextField';
import {GITHUB_API} from '../api.js'

export default function CreateIssue() {
    const inputRef = useRef();
    const textareaRef = useRef();
    const {inputValues,  onChange, isSubmitting, errors, handleSubmit} = useForm
    
    ({
        initialValues:{title:'', body:''},
        onSubmit: async ()=> await axios.post(`${GITHUB_API}/repos/thekrjm/gitHub-clone/issues`,
        inputValues,
        {
            headers:{
                Authorization: process.env.REACT_APP_GITHUB_TOKEN,
                'Content-Type':"applications/json",
            }
        }
        ),
        validate,
        onErrors:(()=>console.log(errors)),
        onSuccess:((result)=>console.log({result})),
        refs:{title:inputRef, body: textareaRef},
        
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