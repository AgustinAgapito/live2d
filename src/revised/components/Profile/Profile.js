import React from 'react'
import FabIcon from './FabIcon'
import { Grid, Paper, makeStyles, Typography, Hidden } from '@material-ui/core'
import Id from './Id'
import StudentInfo from './StudentInfo'

const useStyle = makeStyles( (theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
          },
      margin: theme.spacing(2),
      marginTop: theme.spacing(3),
      flexGrow: 1,
    },
    paper: {
        height: '600px'
    }
}))

function Profile(){
    
    const classes = useStyle()

    return(
        <div>
            <Typography style={{backgroundColor: "#fff", textAlign: "left", padding: "15px", borderBottom: "1px solid #D2EBF3"}}>
                Bachelor of Science in Information and Technology
            </Typography>
            <Typography style={{backgroundColor: "#fff", textAlign: "left", padding: "15px", borderBottom: "1px solid #D2EBF3"}}>
                User Profile
            </Typography>
            
            <div className={classes.root}>
                <Paper elevation={5}>
                <Grid container spacing={0} justify='space-around'>
                    <Hidden smDown>
                    <Grid item xs={3} style={{borderRight: '1px solid black'}}>
                            <Id />
                    </Grid>
                    </Hidden>
                    <Grid item xs={12} md={9} >
                        <StudentInfo />
                    </Grid>
                </Grid>
                </Paper>
                {/* <Paper className={classes.paper} elevation={5}>
                    
                    <Grid container spacing={2} justify='space-around'>
                        <Grid item xs={3}  style={{backgroundColor: 'lavender',borderRight: '1px solid black',height: '600px'}}>
                            <Id />
                        </Grid>
                        <Grid item xs={9} style={{backgroundColor: 'lightblue'}}>
                            <UserInfo />
                        </Grid>
                    </Grid>
                </Paper> */}
                {/*Settings Icon*/}
                <div >
                    <FabIcon />
                </div>
            </div>
        </div>
    )
}

export default Profile