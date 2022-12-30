import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownloadIcon from '@mui/icons-material/Download';
import styles from "../styles/Data.module.css"

function createData(keyword, status) {
  return { keyword, status };
}

const rows = [
  createData('Frozen yoghurt', "Completed"),
  createData('Ice cream sandwich', "Completed"),
  createData('Eclair', "Completed"),
  createData('Cupcake', "On progress"),
  createData('Gingerbread', "On progress"),
];

export default function Data() {

  const downloadFile = (index) => {
    console.log(index)
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {styles.tableHead}>Keyword</TableCell>
            <TableCell className = {styles.tableHead}>Status</TableCell>
            <TableCell className = {styles.tableHead} align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.keyword}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right"><DownloadIcon className={styles.downloadBtn} onClick = {() => downloadFile(index)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}