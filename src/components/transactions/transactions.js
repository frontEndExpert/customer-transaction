import React, {useState, useEffect} from 'react';
import Modal from '../modal/modal';
import UpadteTrans from './updateTrans';


const Transactions = () => {
    const [transArr, setTransArr] = useState({
        "transaction_id": "",
              "customer_id": "",
              "description": "",
              "currency": "",
              "amount": "",
              "cerdit_card_type": "",
              "cerdit_card_number": "",
      });
    const [show, setShow]  = useState(false); 
      const[currentTransId, setCurrentTransId] = useState(0); 
      const[currentTransArr, setCurrentTransArr] = useState(); 
      const [formData, setFormData] = useState("");
      

      const getAllTrans = () => {
        console.log("getAllTrans");
        fetch('/transactions')
          .then(result => result.json())
          .then(body => {
            console.log("body",body);
            setTransArr(  [...body]);
            console.log("transArr",transArr);
            return transArr
          });
      };

      useEffect(()=>{
          if(!show){
                getAllTrans();
            }
        console.log("useEffect transArr",transArr);
      }, [show]);

      const handleDelete = (cid) => {
        //setCurrentTransId
        console.log("cid",cid);
        // fetch(`/transactions/del/${cid}`)
        // .then(result => result.json())
        // .then(body => {
        //   console.log("body",body);
        //   setTransArr(  [...body]);
    
        // })
      };

      const openModify = (transArr) => {
        console.log("openModify transArr",transArr);  
        setCurrentTransId(transArr._id);
        setCurrentTransArr(transArr);
        setShow(true);

      };

    //   const handleModify = (formArr) => {
    //     fetch('/transactions/update/')
    //     .then(result => result.json())
    //     .then(body => {
    //       console.log("body",body);
    //       setTransArr(  [...body]);
    
    //     })
    //   };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("e.target.value", e.target.value);
        const formData =  e.target.value ;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        };

        fetch("/transactions/update", requestOptions)
          .then(response => response.json())
          .then(res => {
              console.log(res);
                return true;
            })
          .then( (success) => {
              console.log("success",success);
              setShow(false)
            });
      };
    
     let transactionArr =  transArr.map( (trans) => {
         console.log("map trans",trans);
        return (
            <div key={trans._id} >
                <span>transaction_id: {trans._id} | customer id: {trans.customer_id } | 
                    description: {trans.description} | currency {trans.currency} | 
                    amount: {trans.amount} | cerdit_card_number {trans.cerdit_card_number} 
                </span>
                <button  onClick={() => openModify(trans)}>Modify</button><button  onClick={() => handleDelete(trans.transaction_id)}>Delete</button>
            </div>
      )});

    return (
            <div>
                <Modal show={show}   >
                    <UpadteTrans transArr={currentTransArr} formData={formData} onSubmit={(formData)=>handleSubmit(formData)} />
                </Modal>
                <div className="cards">
                    {transactionsArr} 
                </div>
            </div>
    )}

export default Transactions;