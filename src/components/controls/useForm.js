import React, { useState } from "react"
import { useSelector } from 'react-redux'

export function useForm(initialValue) {
    
    const [values, setValues] = useState(initialValue) 
    const [error, setError] = useState({}) 

    const todo = useSelector( state => state.filter(i => i.studentNo === 123))

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return{
        values,
        setValues,
        error,
        setError,
        handleInputChange
    }
}

  

export function Form(props){

    const { children, ...other } = props
 
    return(
        <form autoComplete="off" {...other}>
                {props.children}
        </form>
    )
}