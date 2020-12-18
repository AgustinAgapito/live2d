import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650  
  },
});

function createData(title, value) {
  return { title, value};
}

const info = [
  createData('Name','Agapito,Agustin Jr. C.'),
  createData('Course','Bachelor of Science in Information Technology'),
  createData('Student No.', 2019110262),
  createData('Address','Imelda Poblacion, Jaen, Nueva Ecija'),
  createData('Email','agustinagapito09@gmail.com'),
];

function TableInfo() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size='small'>
        <TableBody>
          {info.map((info) => (
            <TableRow key={info.title}>
              <TableCell style={{fontWeight: '600'}} align='left' >
                {info.title}
              </TableCell>
              <TableCell align="left">{info.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableInfo