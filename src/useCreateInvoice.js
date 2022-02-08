import { useState, useEffect } from "react";

const useCreateInvoice = ({customerId,customerName,packages}) => {
  const [id, setId] = useState(null);
  let newInvoice;
  useEffect(() => {
    let totalWeight=0;
    let totalPrice=0;
    
     packages.forEach(element => {
       if(element.customerid===customerId){
           totalWeight+=Number(element.weight.substring(0, element.weight.length - 2));
           totalPrice+=element.price;
       } });
      
      setId({id:id+1}); 
        newInvoice={id:id,date:new Date(),totalPrice:totalPrice,totalWeight:totalWeight+'kg', customerId:customerId,customerName:customerName};
   
  }, []);

  return newInvoice;
}

export default useCreateInvoice;