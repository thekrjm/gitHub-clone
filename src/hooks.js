import { useRef, useState } from "react";

export function useForm({
    validate, 
    initialValues,
    onSuccess,
    onError,
    onSubmit,
    refs,
}){
    
    const [inputValues, setInputValues] = useState(initialValues)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    function onChange(e){
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        
        const validateResult = validate(inputValues);
        setErrors(validateResult);
        setIsSubmitting(true)

        const errorKeys = Object.keys(validateResult);
        
        if(errorKeys.length !== 0){
            const key = errorKeys[0];
            alert(validateResult[key])
            // refs[key].current.focus();
            setIsSubmitting(false)

            return;
        }
        if(errorKeys.length === 0){
            onSubmit()
            console.log('Submit 성공');
        }


    }

    return{
        inputValues,  
        onChange,
        isSubmitting,
        errors,
        handleSubmit
    };
    
}