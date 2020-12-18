import React from "react"
import { Button } from "@material-ui/core"

export default function Buttons({ type,color,variant,text,onClick }) {
    
    return(
        <Button 
            type={type}
            variant={variant}
            color={color}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}