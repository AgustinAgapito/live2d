import React from "react"
import { useForm, Form } from '../../controls/useForm'
import { Typography, FormControl } from "@material-ui/core"
import Input from '../../controls/Input'
import Buttons from '../../controls/Button'
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail } from '../../../redux'

export default function ChangeMail({ theme, arr }) {
    const classes = theme
    
    const email = arr.map( i => i.email)

    const todo = useSelector( state => state.filter(i => i.studentNo === 123))

    const initialValue = {
        currentEmail: todo.map( i => i.email)[0],
        newEmail: '',
         password: '',
    }

    const validate = () => {
        let check = {}
        check.currentEmail = values.currentEmail ? "" : "Incorrect Email"
        check.newEmail = values.newEmail ? "" : "Invalid Email"
        check.password = values.password ? "" : "Incorrect Password"
        setError({
            ...check    
        })
        return Object.values(check).every( value => value === "")
    }

    const{
        values,
        setValues,
        error,
        setError,
        handleInputChange
    } = useForm(initialValue)

    const handleSubmit = e => {
        e.preventDefault()
        if(validate()){
            console.log("passed",values)
        } else {
            console.log("Change Mail Failed")
        }
    }

    const dispatch = useDispatch(() => updateEmail(values))

    return(
        <Form onSubmit={handleSubmit} className={classes.form} >
        <FormControl fullWidth className={classes.margin}>
            <Typography variant="h5" style={{textDecoration: "underline"}}>
                Change Email
            </Typography>
            <Input 
                label="Current Email"
                name="currentEmail"
                value={values.currentEmail}
                onChange={handleInputChange}
                color="primary"
                error={error.currentEmail}
            />
            <Input 
                label="New Email"
                name="newEmail"
                value={values.newEmail}
                onChange={handleInputChange}
                error={error.newEmail}
            />
            <Input 
                label="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                error={error.password}
                type="password"
            />
            <Buttons
                type="submit"
                text="Submit"
                onClick={() => dispatch(updateEmail(values))}
                color="secondary"
                variant="contained"
            />
        </FormControl>
    </Form>
    )
}