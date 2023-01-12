import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useForm({
    validate, 
    initialValues,
    onSuccess,
    onErrors,
    onSubmit,
    refs,
}){
    
    const [inputValues, setInputValues] = useState(initialValues)
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()


    function onChange(e){
        const {name, value} = e.target;
        setInputValues({...inputValues, [name]:value})
    }

    async function handleSubmit(e){
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
            try{
                const result=await onSubmit()
                console.log(result);
                onSuccess(result);
                navigate('/', {replace:true})
            }catch(e){
                onErrors();
            }
            return;
        }


    }

    return{
        inputValues,  
        onChange,
        isSubmitting,
        errors,
        handleSubmit,
        refs
    };
    
}