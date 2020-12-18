import React, { useState } from "react"
import { Paper, Avatar, makeStyles, Typography, Button, Divider, Grid } from "@material-ui/core"

const useStyles = makeStyles( (theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2.5),
    },
    input: {
        display: "none"
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1)
    },
    medium: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1)
    },
    small: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(1)
    },
    typography: {
        textAlign: "left",
        padding: theme.spacing(2),
        borderBottom: "1px solid black"
    },
    paper: {
        display: "flex",
        alignItems: "flex-end",
        marginTop: theme.spacing(2)
    },
    grid: {
        margin: theme.spacing(1)
    }
}))

export default function ProfPic({ picture }) {
    const classes = useStyles()
    const [image, setImage] = useState('')
    
    const handleChange = e => {
        setImage(
            {[e.target.name]: e.target.value}
        )
    }
    return( 
        <div className={classes.root}>
            <Typography variant="h4" className={classes.typography}>
                Change Profile Picture
            </Typography>
            <Paper elevation={0} className={classes.paper}>
                <Avatar 
                    src={picture} 
                    alt="profile" 
                    className={classes.large}
                    variant="rounded"
                />
                <Avatar 
                    alt="profile"
                    src={picture}
                    variant="rounded"
                    className={classes.medium}
                />
                    <Avatar 
                    alt="profile"
                    src={picture}
                    variant="circle"
                    className={classes.small}
                />
            </Paper>
            <Grid container className={classes.grid}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    name="image"
                    onChange={handleChange}
                />  
                <label style={{textAlign: "left"}} htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                Upload
                </Button>
                </label>
            </Grid>
        </div>
    )
}