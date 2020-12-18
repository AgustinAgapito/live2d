import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import { makeStyles, Typography, Avatar } from '@material-ui/core';

function DrawerToolBar() {

    const useStyle = makeStyles( (theme) => ({
        toolbar: {
            display: "flex",
            alignItems: "center",
            paddingTop: "70px",
            paddingBottom: "30px",
            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            background: 'linear-gradient(to top, rgba(17,113,140,1) 1%, rgba(63,170,229,1) 29%, rgba(131,217,235,1) 90%)'
          },
        avatar: {
            marginLeft: "20px",
            width: theme.spacing(8),
            height: theme.spacing(8),
            backgroundColor: "rgb(46, 50, 65)"
          },
          logo: {
            width: theme.spacing(6),
            marginRight: "10px"
          },
          dashboard: {
            //margin on side nav
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            color: "rgb(204, 197, 197)",
            "&:hover": {
              color: "#fff",
              backgroundColor: "rgb(102, 104, 112)"
            }
          },
          dashboardIcon: {
            color: "rgb(204, 197, 197)",
            "&:hover": {
              color: "#fff"
            }
          },
          dashboardIcons: {
            padding: theme.spacing(2),
            color: "rgb(204, 197, 197)",
            "&:hover": {
              color: "#fff"
            },
            alignItems: "center",
        
          }
    }))

    const classes = useStyle()

    return(
        <div style={{background: "rgb(46, 50, 65)", height: "100%"}}>
        <div className={classes.toolbar} >
          <Avatar alt="Agustin" className={classes.avatar} />
          <Typography align= "left" style={{position: "relative", marginLeft: "5px", color: "#fff"}}>
              <span style={{ width: "100px" , position: "absolute", top: "-15px", fontSize: "12px", color: "rgb(179, 221, 235)"}}>
                Student Name: 
              </span> 
              Agustin Agapito
          </Typography>
        </div>
        <Divider />
        <List>
          {['Dashboard', 'Grades', 'Profile', 'Evaluation', 'Accountabilities', 'Settings'].map((text, index) => (
            <ListItem className={classes.dashboard} button key={text}>
              <ListItemIcon  className={classes.dashboardIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
}

export default DrawerToolBar