import React from "react"
import { makeStyles, Typography, Grid } from "@material-ui/core"
import Input from '../../controls/Input'
import Buttons from '../../controls/Button'
import ChangePassword from './ChangePass'
import ChangeMail from './ChangeMail'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
          },
      margin: theme.spacing(2.5),
      flexGrow: 1
    },
    typography: {
        textAlign: "left",
        borderBottom: "1px solid black",
        padding: theme.spacing(2)
    },
    margin: {
        '& > *': {
            margin: theme.spacing(1),
        }         
    },
    form: {
        display: "block",
        textAlign: "left",
    },
    grid: {
        marginTop: theme.spacing(3)
    }
  }));


function EditInfo({arr}) {
    const classes = useStyles()
    
    return(
        <div className={classes.root}>
            <Typography variant="h4" className={classes.typography}>
                Edit Information
            </Typography>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={12} sm={6}>
                    <ChangeMail 
                        theme={useStyles()}
                        arr={arr}
                    /> 
                </Grid>
                <Grid item xs={12} sm={6}>
                   <ChangePassword
                        theme={useStyles()}
                        arr={arr}
                   /> 
                </Grid>
            </Grid>
                <Typography variant="h4" className={classes.typography}>
                    Student Details
                </Typography>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item>
                        <Typography>
                            First Name { arr.map( i => i.fname)}
                        </Typography>
                        
                    </Grid>
          
                </Grid>
        </div>
    )
}

export default EditInfo