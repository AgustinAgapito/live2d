import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'
import TableInfo from './TableInfo'

const useStyle = makeStyles( (theme) => ({
    title: {
        fontWeight: 500,
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2), 
    }
}))

function StudentInfo() {
    const classes = useStyle()

    return(
        <Paper elevation={2}>
            <Typography className={classes.title} variant="h4" align='left'>
                Student Information
            </Typography>
            <Paper square elevation={0} style={{borderTop: '1px solid black'}}>
                <TableInfo />
            </Paper>
        </Paper>
    )
}

export default StudentInfo