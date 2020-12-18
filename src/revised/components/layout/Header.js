import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Toolbar, CssBaseline, AppBar, IconButton ,makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header({ handleDrawerToggle, drawerWidth }) {
    
    const useStyle = makeStyles( (theme) => ({
        appBar: {
            [theme.breakpoints.up('md')]: {
              width: `calc(100% - ${drawerWidth}px)`,
              marginLeft: drawerWidth,
            },  
            boxShadow: "none",
            borderBottom: "1px solid #D2EBF3",
          },
          menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          },
          headerButton: {
            width: theme.spacing(5),
            height: theme.spacing(5),
            marginLeft: "auto",
            //backgroundColor: "#18A8D8",
            color: "#fff",
          },
          headerTitle: {
            //color: "#18A8D8",
            color: "#fff",
            fontWeight: "400"
          },
          subTitle: {
            position: 'absolute',
            top: theme.spacing(5),
            fontSize: '10px'
          }
    }))

    const classes = useStyle()

    
    return(
        <header>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.headerTitle} variant="h6" noWrap>
                  NEUST
                </Typography>
                {/* <Typography className={classes.subTitle} variant='overline'>
                  Nueva Ecija University of Science and Technology
                </Typography> */}
                <IconButton className={classes.headerButton}>
                    <ExitToAppIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header