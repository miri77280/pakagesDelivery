import React from 'react';
import styles from './InvoiceList.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Invoice from '../InvoiceItem/InvoiceItem';
const InvoiceList = ({invoices}) => (
  <div className={styles.InvoiceList} data-testid="InvoiceList">
     <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Total Weight</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((row) => {

                return (
                  <Invoice row={row}/>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
  </div>
);

export default InvoiceList;
