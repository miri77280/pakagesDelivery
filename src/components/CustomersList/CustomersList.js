import styles from './CustomersList.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Customer from '../Customer/Customer';

const CustomersList = (props) => {

  
  const handleDelete = (customerId) => {
    props.setState({ customers: props.customers.filter(element => element.id !== customerId) });
  }
  
  const openInvoice = (customerId,customerName) => {
    let path = `invoice`;
    props.routeChange(path,customerId,customerName);
  }

  return (
    <div className={styles.CustomersList} data-testid="CustomersList">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>

              <TableCell >id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {props.customers.map((row) => {

              return (
                <Customer row={row} onDelete={handleDelete} onCreateInvoice={openInvoice}></Customer>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomersList;
