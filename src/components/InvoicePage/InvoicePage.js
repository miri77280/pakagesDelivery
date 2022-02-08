import React,{ useEffect, useState, } from 'react';
import styles from './InvoicePage.module.css';
import {  useLocation } from 'react-router-dom'
import { TableCell, TableRow ,TableBody,Table} from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';


const InvoicePage = ({invoices, packages}) => {
  const [invoiceState, setInvoice] = useState({currentInvoice:null});
  const [packagesState,setPackages]=useState({clientPackages:[]});

const {state}=useLocation();
useEffect(() => { 
 const found= invoices.find(elem=>elem.customerId=state.customerId);
 console.log(found);
 setPackages({clientPackages:packages.filter(x=>x.customerid===state.customerId)});
 setInvoice({currentInvoice:found});
 
    },[invoices,packages,state.customerId]);
    

return(
  <div className={styles.InvoicePage} data-testid="InvoicePage">
    <div className={styles.upContent}>
    <div className={styles.leftDiv}>
    <b>customer name</b>
    
    <p>{invoiceState.currentInvoice?.customerName}</p>
   
    <b>Date</b>

    <p>{invoiceState.currentInvoice?.date.toLocaleDateString()}</p>
    </div>

   <div className={styles.rightDiv}>
     <b>Invoice</b>
   <p><b>No.</b>{invoiceState.currentInvoice?.id}</p>
   </div>
   </div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow >

              <TableCell style={{borderBottom:"none"}}><b>id</b></TableCell>
              <TableCell style={{borderBottom:"none"}}><b>weight</b></TableCell>
              <TableCell style={{borderBottom:"none"}} className={styles.price} ><b>price</b></TableCell>
             
            </TableRow>
          </TableHead>

          <TableBody>
            {packagesState.clientPackages?.map((row) => {

              return (
                <TableRow key={row.id}
                sx={{
                  [`& .${TableRow.root}`]: {
                    borderBottom: "none"
                  }
                }}
                         >
                           <TableCell style={{borderBottom:"none"}} component="th" scope="row">
                             {row.id}
                           </TableCell>
                            <TableCell style={{borderBottom:"none"}}>{row.weight}</TableCell>
                           <TableCell style={{borderBottom:"none"}}className={styles.price}>{row.price}</TableCell>
                           <TableCell style={{borderBottom:"none"}}></TableCell>
                </TableRow>
               
              )

            })}
             <TableRow>
                  <TableCell style={{borderBottom:"none"}} component="th" scope="row"> </TableCell>
                  <TableCell style={{borderBottom:"none"}} >{invoiceState.currentInvoice?.totalWeight}</TableCell>
                  <TableCell style={{borderBottom:"none"}} className={styles.price}><b>Total:</b>{invoiceState.currentInvoice?.totalPrice}</TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

   <b>  You received {packagesState.clientPackages.length} packages</b> 
     <p>   <b>  Thank you for using our services</b></p>
  </div>
);
}


export default InvoicePage;
