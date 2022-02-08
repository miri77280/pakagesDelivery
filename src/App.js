import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import {
    Outlet,
  Route, Routes
} from "react-router-dom";
import './App.css';
import CustomersList from './components/CustomersList/CustomersList';
import InvoicesList from './components/InvoiceList/InvoiceList';
import InvoicePage from './components/InvoicePage/InvoicePage';
import AppMenu from './components/Menu/Menu';
import PackagesList from './components/PackagesList/PackagesList';
import { useNavigate } from "react-router-dom";

function App() {

  const [appData, setAppData] = useState({ customers: [], packages: [] });
  const [invoices, setInvoices] = useState([]);
  
    useEffect(() => {
    let invoiceLastId=0;
    const createInvoice=(customerId,customerName,data)=>{
      let totalWeight=0;
      let totalPrice=0;
      
       data.packages.forEach(element => {
         if(element.customerid===customerId){
             totalWeight+=Number(element.weight.substring(0, element.weight.length - 2));
             totalPrice+=element.price;
         } });
        
         invoiceLastId=invoiceLastId+1; 
         const newInvoice={id:invoiceLastId,date:new Date(),totalPrice:totalPrice,totalWeight:totalWeight+'kg', customerId:customerId,customerName:customerName};
       return newInvoice;
     }

    const onLoad = () => {
      fetch("/data.json").then(response => response.json())
        .then(data => {
          const invoicesList=[];
          data.packages.forEach(element => {
            let customerName = data.customers.find(x => x.id === element.customerid).name;
            element.customerName = customerName;
          
          });
          data.customers.forEach((element)=>{
            invoicesList.push(createInvoice(element.id,element.name,data));
           });
          setInvoices(invoicesList);
          data.packages.sort((a, b) => (a.shippingOrder > b.shippingOrder) ? 1 : -1)
         setAppData(data);
        });
    }
    onLoad();
  }, []);
  

  const navigate = useNavigate(); 
  const routeChange = (path, customerId,customerName) =>{ 
       navigate(path,{state :{ customerId : customerId,customerName:customerName}})
}

  return (
    <div className="App">
      {/* <Router> */}

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <AppMenu data={appData}></AppMenu>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Mail Delivery Service
              </Typography>

            </Toolbar>
          </AppBar>
        </Box>
            
        <Drawer
          anchor={"left"}
          open={false}
          onClose={() => { }}
        >
          <List style={{ width: "300px" }}>
            <ListItem button>
              <ListItemText primary={"Packages"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Customers"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Invoices"} />
            </ListItem>
          </List>
        </Drawer>
        <Routes>
      
          <Route exact path='/customers' element={< CustomersList setState={setAppData} customers={appData.customers} routeChange={routeChange} />}></Route>
          <Route exact path='/packages' element={< PackagesList packages={appData.packages} setState={setAppData} customers={appData.customers} />}></Route>
          <Route exact path='/invoices' element={< InvoicesList invoices={invoices}  customers={appData.customers}/>}></Route>
          <Route exact path='/invoice' element={< InvoicePage packages={appData.packages} invoices={invoices} />}></Route>
          <Route exact path='/' element={< Outlet />}></Route>
        </Routes>
      {/* </Router> */}
    </div>

  );
}

export default App;
