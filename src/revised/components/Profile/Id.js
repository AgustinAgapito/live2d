import React from 'react'
import { Paper, Avatar, makeStyles, Typography } from '@material-ui/core'
import pic from '../../Asset/profile.png'

const useStyle = makeStyles( (theme) => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden'     
    },
    name: {
        fontWeight: '600',
        marginTop: theme.spacing(2),
    }
}))

function Id() {
    const classes = useStyle()

    return(
        <Paper className={classes.paper} elevation={0}>
            {/* <Typography>
                NUEVA ECIJA UNIVERSITY OF SCIENCE AND TECHNOLOGY
            </Typography> */}
            <Avatar 
                variant='square'
                src={pic}
                className={classes.avatar}
                alt="pic"
            />
            <Typography >
                2019110262
            </Typography>
            <Typography variant='subtitle2'>
                Student No.
            </Typography>
{/* 
            <Typography className={classes.name} variant='h6'>
                Agustin C. Agapito Jr.
            </Typography>
            <Typography>
                BSIT
            </Typography> */}
        </Paper>
    )
}

export default Id