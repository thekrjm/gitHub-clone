import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GITHUB_API } from "./api";

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
                onSuccess(result);
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


async function getUserInfo(){
    const data = await axios(`${GITHUB_API}/user`,{
        headers:{
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
            'Content-Type' : 'application/json',
        },
    });
    return data.data;
}


export function useUser(){
    return useQuery(['userInfo'],()=>getUserInfo(),{staleTime:'Infinity'});
}