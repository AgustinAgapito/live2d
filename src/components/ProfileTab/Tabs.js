import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs } from "@material-ui/core"
import Tab from '@material-ui/core/Tab'
import CssBaseline from "@material-ui/core/CssBaseline"
import Profile from "./TabRoutes/Profile"
import ProfPic from "./TabRoutes/ProfPic"
import EditInfo from "./TabRoutes/EditInfo"
import { Link, Switch, Route } from "react-router-dom"


const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  label: {
    "&:hover":{
        backgroundColor: "#71D9FC",
        color: "white"
    },
    textTransform: "none",
    fontSize: "15px",
    padding: "20px",
    color: "#000",
    borderRight: "1px solid #D2EBF3",
  },
  indicator: {
    backgroundColor: "#71D9FC",
    height: "4px",
    borderRadius: "50px",
    width: "50px"
  },
  paper: {
    backgroundColor: "primary",
    overflow: "hidden",
    margin: "20px"
  },
});

export default function TabNav( {color, id, picture, arr} ) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <CssBaseline />
        <Paper className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="fullWidth"
            classes={{indicator: classes.indicator}}
        >
            <Tab 
                label="Overview" 
                className={classes.label}
                component={Link}
                to="/"
            />
            <Tab 
                label="Profile Picture" 
                className={classes.label}
                style={{whiteSpace: "nowrap"}}
                component={Link}
                to="/profpic"
            />
            <Tab 
                label="Edit Information" 
                className={classes.label}
                style={{whiteSpace: "nowrap"}}
                component={Link}
                to="/edit_info"
            />
        </Tabs>
        </Paper>
        <Paper elevation={1} className={classes.paper}>
          <Switch>
            <Route exact path="/">
              <Profile color={color} arr={arr} picture={picture}/>
            </Route>
            <Route path="/profpic">
              <ProfPic picture={picture}/>
            </Route>
            <Route path="/edit_info">
              <EditInfo picture={picture} arr={arr}/>
            </Route>
          </Switch>
        </Paper>
    </div>
  );
}