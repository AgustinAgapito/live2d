import React from 'react';
import './App.css';
import Main from "./components/Main/Main"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import json from "./components/StudentDetails/StudentDetails"
import { BrowserRouter as Router } from "react-router-dom"
import AppLayout from './revised/components/layout/AppLayout'

const font = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


const male = createMuiTheme({
  palette: {
    primary: {
     // main: "#71D9FC"
      main: "#fff",
      //background: 'linear-gradient(220deg, rgba(17,113,140,1) 1%, rgba(63,170,229,1) 29%, rgba(131,217,235,1) 90%)'
      //background: "linear-gradient(to right top, #c7eef4, #bbedf4, #aeebf4, #a0eaf3, #92e8f3, #84e2ef, #76dbeb, #66d5e7, #55c8de, #42bbd4, #2cafcb, #08a2c2)"
      //background: "linear-gradient(to right, #b3ecf9, #a4e9f8, #93e6f7, #81e2f6, #6ddff5, #5fd6ed, #4fcee4, #3dc5dc, #32b5cb, #27a5bb, #1a95aa, #0a869a)"
    }
  }
});

const female = createMuiTheme({
palette: {
  primary: {
    main: "#fff"
  }
}
});


function App() {
  //filter array
  const id = 123
  const filter = json.filter( i => i.studentNo === id)
  const getGender = filter.map( i => i.gender)
  const getPicture = filter.map( i => i.picture)
  
  //Get FullName
  const fname = filter.map( i => i.fname)
  const lname = filter.map( i => i.lname)
  const addName = filter.map( i => i.addName)
  const getName = fname + " " + lname + " " + addName

  return (
    <div className="App">
      {/* <Router>
        <ThemeProvider theme={font}>
        <ThemeProvider theme={getGender[0] ? male : female}>
          <Main 
            color={getGender[0] ? male.palette : female.palette} 
            id={id} 
            picture={getPicture[0]}
            name={getName}
            arr={filter}
          />  
        </ThemeProvider>
        </ThemeProvider>
      </Router>    */}
      <AppLayout />
    </div>
  );
}

export default App;
