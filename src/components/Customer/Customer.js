import React from 'react';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';



const Customer = ({row,onCreateInvoice,onDelete}) => {
  return (
    <TableRow key={row.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
   <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell ><Button variant="contained" onClick={()=>onCreateInvoice(row.id,row.name)}>Create Invoice</Button></TableCell>
                    <TableCell ><Button variant="contained" onClick={() => onDelete(row.id)} >Delete</Button></TableCell>
 </TableRow>
  );
    
  }


export default Customer;
