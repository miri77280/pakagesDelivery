import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const InvoiceItem = ({row}) => (
 
    <TableRow 
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                   <TableCell >{row.customerName}</TableCell>
                    <TableCell >{row.totalWeight}</TableCell>
                    <TableCell >{row.totalPrice}</TableCell>
                    </TableRow>

  

);

export default InvoiceItem;
