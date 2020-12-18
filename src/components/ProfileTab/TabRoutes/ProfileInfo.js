import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    typography: {
        textAlign: "left",
        margin: theme.spacing(4.5),
    },
    span: {
        fontWeight: "800"
    }
  }));

function ProfileInfo({ info}) {
  
    const classes = useStyles()
    
    return(
        <div>
            <Typography className={classes.typography}>
                <span className={classes.span}>Name: </span> {info.fname}
            </Typography>
            <Typography className={classes.typography}>
                <span className={classes.span}>Course: </span> {info.course}
            </Typography>
            <Typography className={classes.typography}>
                <span className={classes.span}>Address: </span>{info.location}
            </Typography>
            <Typography className={classes.typography}>
                <span className={classes.span}>Email: </span>{info.email}
            </Typography> 
        </div>
    )
}

export default ProfileInfo