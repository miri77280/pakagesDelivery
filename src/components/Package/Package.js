import React from 'react';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
const Package = ({row,onDelete,goUp,goDown}) => (
 
    <TableRow key={row.id}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell >{row.customerName}</TableCell>
                    <TableCell >{row.weight}</TableCell>
                    <TableCell >{row.price}</TableCell>
                    <TableCell ></TableCell>
                    <TableCell ><Button variant="contained" onClick={() => onDelete(row.id)}>Delete</Button></TableCell>
                    <TableCell ><Button variant="contained" onClick={() => goUp(row.id)}>^</Button></TableCell>
                    <TableCell ><Button variant="contained" onClick={() => goDown(row.id)}>V</Button></TableCell>
                  </TableRow>

);

export default Package;
