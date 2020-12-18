import React from 'react'
import Input from "../../controls/Input"
import { useForm, Form } from '../../controls/useForm'
import Buttons from '../../controls/Button'
import { Typography, FormControl } from "@material-ui/core"


const initialValue = {
    currentPassword: '',
    confirmPassword: '',
    newPassword: ''
}


export default function ChangePass({ theme, arr }) {
    
    const classes = theme
    const pass = arr.map( i => i.password)

    const validate = () => {
        let check = {}
        check.currentPassword = values.currentPassword === pass[0] ? "" : "Incorrect Password"
        check.confirmPassword = values.confirmPassword === values.currentPassword ? "" : "Password is not matched"
        check.newPassword = values.newPassword ? "" : "Please do not use your old password."
        setError({
            ...check    
        })
        return Object.values(check).every( x => x === "")
    }

    const{
        values,
        setValues,
        error,
        setError,
        handleInputChange,
        handleReset
    } = useForm(initialValue)


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            console.log("passed",values)
            alert("Password Changed")
        } else {
            console.log("Change Password Failed")
        }
    }
    
    return(
        <Form onSubmit={handleSubmit}  className={classes.form}>
                    <FormControl fullWidth className={classes.margin}>
                        <Typography variant="h5" style={{textDecoration: "underline"}} >
                            Change Pass
                        </Typography>
                        <Input 
                            label="Current Password"
                            name="currentPassword"
                            type="password"
                            value={values.currentPassword}
                            color="primary"
                            onChange={handleInputChange}
                            error={error.currentPassword}
                        />
                        <Input 
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            error={error.confirmPassword}
                        />
                        <Input 
                            label="New Password"
                            name="newPassword"
                            value={values.newPassword}
                            onChange={handleInputChange}
                            error={error.newPassword}
                            type="password"
                        />
                        <Buttons
                            type="submit"
                            text="Submit"
                            color="secondary"
                            variant="contained"
                        />
                    </FormControl>
                </Form> 
    )
}