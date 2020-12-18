import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Avatar, Grid } from '@material-ui/core';
import ProfileInfo from './ProfileInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
  },
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: "20px"
  },
  paperTitle: {
    padding: "20px",
    borderBottom: "1px solid black",
  },
  typography: {
      textAlign: "left",
      margin: theme.spacing(4.5),
  },
  span: {
      fontWeight: "800"
  }
}));

export default function Profile( {color, arr, picture} ) {
    const classes = useStyles();
    
    return (
    <div className={classes.root}>
        <Typography className={classes.paperTitle} variant="h4" align="left" >
            Student Details
        </Typography>
        <Grid container alignItems="stretch" >
            <Grid item ms="true">
                <Paper elevation={0}>
                    <Avatar   
                        variant="rounded"
                        src={picture} 
                        alt="Agustin" 
                        className={classes.avatar}
                    />
                    <Typography >
                        Student No: {arr.map( i => i.studentNo)}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item nowrap="true" >
                <Paper elevation={0}>    
                   {arr.map( (text,index) => (
                        <ProfileInfo key={index} info={text}/>
                   ))}
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}