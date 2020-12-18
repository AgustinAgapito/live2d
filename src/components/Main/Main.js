import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from "@material-ui/core/Avatar"
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tab from "../ProfileTab/Tabs";
import logo from "../Asset/neust_logo.png"


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "rgb(22, 69, 172)",
    boxShadow: "none",
    borderBottom: "1px solid #D2EBF3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "30px",
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    background: 'linear-gradient(to top, rgba(17,113,140,1) 1%, rgba(63,170,229,1) 29%, rgba(131,217,235,1) 90%)'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(8)
  },
  headerButton: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginLeft: "auto",
    //backgroundColor: "#18A8D8",
    color: "#fff",
    "&:hover": {
      color: "#18A8D8"
    }
  },
  headerTitle: {
    //color: "#18A8D8",
    color: "#fff",
    fontWeight: "400"
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
}));


function Main( { color, id, picture, name, arr },props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{background: "rgb(46, 50, 65)", height: "100%"}}>
      <div className={classes.toolbar} >
        <Avatar alt="Agustin" className={classes.avatar} src={picture} />
        <Typography align= "left" style={{position: "relative", marginLeft: "5px", color: "#fff"}}>
            <span style={{ width: "100px" , position: "absolute", top: "-15px", fontSize: "12px", color: "rgb(179, 221, 235)"}}>
              Student Name: 
            </span> 
          {name}
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
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{background: color.primary.background}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{color: "#fff"}}/>
          </IconButton>
          <img src={logo} alt="" className={classes.logo}></img>
          <Typography className={classes.headerTitle} variant="h6" noWrap>
            NEUST
          </Typography>
          <IconButton className={classes.headerButton}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
   
        <Typography style={{backgroundColor: "#fff", textAlign: "left", padding: "20px", borderBottom: "1px solid #D2EBF3"}}>
          Bachelor of Science in Information and Technology
        </Typography>
            <Tab color={color} id={id} picture={picture} arr={arr}/>
      </main>
    </div>
  );
}

export default Main;