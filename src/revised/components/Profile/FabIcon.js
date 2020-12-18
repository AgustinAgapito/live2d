import React from 'react'
import { makeStyles, Fab } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const useStyle = makeStyles( (theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(6),
        padding: theme.spacing(4)
    },
    
}))

function FabIcon(){
    const classes = useStyle()

    return(
        <div>
            <Fab className={classes.fab} color='secondary'>  
                <EditIcon fontSize='default' />  
            </Fab>
        </div>
    )
}

export default FabIcon