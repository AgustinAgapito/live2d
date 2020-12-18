import React from "react"
import { TextField } from "@material-ui/core"

export default function Input({type,color,name,label,value,onChange,error=null}) {
    
    return(
        <TextField 
            {...(error && {error:true,helperText:error})}
            id={name}
            label={label}
            name={name}
            value={value}
            type={type}
            color={color}
            onChange={onChange} 
            InputProps={
                {style: { color: "black" }}
            }
        />
    )
}