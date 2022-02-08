import React, {useState} from 'react';
import styles from './AddPackageModal.module.css';
import Modal from 'react-modal';
import Select from 'react-select';
const AddPackageModal = ({setModalOpenState,isOpen,customers,addNewPackage}) => {
  const [appData, setModalData] = useState({ weight: '', customer: '', price:'' });
  
  
    const closeModal=()=> {
    setModalOpenState(false);
  }

  const handleChange= (key,event)=> {
   
    setModalData({...appData,[key]: (event.target?.value||event)});
    
    console.log(appData);
  }
  const customStyles = {
    control: base => ({
      ...base,
     width:250,
     height:30,
     margin:5
    })
  };
  return (
  <Modal 
        isOpen={isOpen}
        
        onRequestClose={closeModal}
        
        ariaHideApp={false}
      >
        <button  onClick={closeModal}>X</button>
        <h2>Add new package</h2>
       
        <form className={styles.form}>
          <div >
          <label>customer name:</label>
          <Select   getOptionLabel={option => option.name}
           getOptionValue={option => option.id} onChange={(e) => handleChange('customer', e)}
     options={customers} styles={customStyles}/>
          </div>
          <div>
          <label>weight:</label>
          <input onChange={(e) => handleChange('weight', e)} />
          </div>
          <div>
          <label>price:</label>
          <input onChange={(e) => handleChange('price', e)}/>
          </div>
        </form>
       
        
        <button type='submit' className={styles.btn} onClick={()=>addNewPackage(appData)}>add</button>
       
      </Modal>
 
);
  }

export default AddPackageModal;
