import React from 'react';
import styles from './PackagesList.module.css';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import AddIcon from '@mui/icons-material/Add';
import Package from '../Package/Package';
import AddPackageModal from '../AddPackageModal/AddPackageModal';
const PackagesList = ({packages,customers,setState}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal=()=> {
    setIsOpen(true);
  }

  const handleDelete=(packageId)=>{
    setState({customers:customers,packages: packages.filter(element=>element.id!==packageId)});
   }

   const addNewPackage=(data)=>{
     const newShippingOrder=Math.max(...packages.map(o => o.shippingOrder), 0)+1;
     const maxPackageId = packages.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
      const  newId='pak'+ (Number(maxPackageId.substring(3,4))+1);
     let newPack={id:newId,customerid:data.customer.id,customerName:data.customer.name,price:data.price, weight:data.weight,shippingOrder:newShippingOrder};
     packages.push(newPack);
     setState({customers:customers,packages: packages});
     setIsOpen(false);
     alert('successfully added');
  }

  const goUp=(id)=>{
   const currentPackage= packages.find(element=>element.id===id);
   const currentShippingOrder =currentPackage.shippingOrder;
   const prevPackage=packages.find(element=>element.shippingOrder===currentShippingOrder-1);
   currentPackage.shippingOrder=prevPackage?.shippingOrder||currentShippingOrder;
   if(prevPackage){
   prevPackage.shippingOrder=currentShippingOrder;
   packages.sort((a, b) => (a.shippingOrder > b.shippingOrder) ? 1 : -1)
   setState({customers:customers,packages: packages});
   }

  }

const goDown=(id)=>{
  const currentPackage= packages.find(element=>element.id===id);
  const currentShippingOrder =currentPackage.shippingOrder;
  const nextPackage=packages.find(element=>element.shippingOrder===currentShippingOrder+1);
  currentPackage.shippingOrder=nextPackage?.shippingOrder||currentShippingOrder;
  if(nextPackage){
    nextPackage.shippingOrder=currentShippingOrder;
  packages.sort((a, b) => (a.shippingOrder > b.shippingOrder) ? 1 : -1)
  setState({customers:customers,packages: packages});
  }
}
  return(
  <div className={styles.PackagesList} data-testid="PackagesList">
     <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Price</TableCell>
              
                <TableCell>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu" onClick={openModal}
                  >
                    <AddIcon />
                  </IconButton></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packages.map((row) => {

                return (
                 <Package row={row} onDelete={handleDelete} goUp={goUp} goDown={goDown} />
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <AddPackageModal setModalOpenState={setIsOpen} isOpen={modalIsOpen} customers={customers} addNewPackage={addNewPackage}/>
  </div>
);
}

export default PackagesList;
