import React, {useState, useEffect, useRef} from 'react';
import Modal from '../modal/modal';
import UpadteTrans from './updateTrans';
import './transactions.scss';


const Transactions = () => {
    const [transArr, setTransArr] = useState([{
        "_id": "1",
              "customer_id": "",
              "description": "",
              "currency": "",
              "amount": "",
              "cerdit_card_type": "",
              "cerdit_card_number": "",
      }]);
    const [show, setShow]  = useState(false); 
      const[currentTransId, setCurrentTransId] = useState(0); 
      const[currentTransArr, setCurrentTransArr] = useState(); 
      const [formData, setFormData] = useState("");
      const modal = useRef();

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

      const handleDelete = async (cid) => {
        //setCurrentTransId
        console.log("cid",cid);
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/text" },
          body:  cid
        };
        const user = await fetch(`/transactions/del/${cid}` , requestOptions)
        console.log("user",user);
        // .then(result => result.json())
        // .then(body => {
        //   console.log("body",body);
        //  // setTransArr( body);
        // })
      };

      const openModify = (transArr) => {
        console.log("openModify transArr",transArr);  
        setCurrentTransId(transArr._id);
        setCurrentTransArr(transArr);
        setShow(true);
        modal.current.style.display = 'block';

      };

      const closeModify = (transArr) => {
        setShow(false);
        modal.current.style.display = 'none';
      }

    //   const handleModify = (formArr) => {
    //     fetch('/transactions/update/')
    //     .then(result => result.json())
    //     .then(body => {
    //       console.log("body",body);
    //       setTransArr(  [...body]);
    
    //     })
    //   };

      const handleSubmit = (formObj) => {
       // e.preventDefault();
        //console.log("e.target.value", e.target.value);
        console.log("trans formObj", formObj);
        //const formData =  e.target.value ;
        const formData = formObj;
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
            <div className="card" key={trans._id} >
                <span>transaction_id: {trans._id} | customer id: {trans.customer_id } <br/> 
                    description: {trans.description} <br/> 
                    currency {trans.currency} | amount: {trans.amount} <br/>
                    {trans.cerdit_card_type} number: {trans.cerdit_card_number} 
                </span>
                <button className="btn modify" onClick={() => openModify(trans)}>Modify</button>
                <button className="btn delete" onClick={() => handleDelete(trans._id)}>Delete</button>
            </div>
      )});

    return (
            <div>
                <Modal show={show} ref={modal} style={{display: 'none'}}  onClick={closeModify} >
                    <UpadteTrans transArr={currentTransArr} formData={formData} onSubmit={(formData)=>handleSubmit(formData)} />
                 </Modal>
                    <div className="cards">
                        {transactionArr} 
                    </div>
            </div>
    )}

export default Transactions;