import React, {useState, useEffect, useRef } from 'react';
import Modal from '../modal/modal';
import UpdateTrans from './updateTrans';
import AddTrans from './addTrans';
import useOnClickOutside from '../hooks/useOnClickOutside'
import './transactions.scss';


const Transactions = (props) => {
    const [currentCustomerId, setCurrentCustomerId] = useState(props.cid);
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
      const[customerData, setCustomerData] = useState();
      const [formData, setFormData] = useState("");
      const [showModal, setShowModal] = useState();
      const [addTran, setAddTran] = useState();
      const [modalUpdate, setModalUpdate] = useState();
      //const modalRef = useRef();

   // useOnClickOutside(modalRef, () => setShow(false));

    const getTransByCid = async (cid) => {
      const curTransArr = await fetch(`/transactions/user/${cid}` )

    }

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

      const getUserTrans = async (cid) => {
        console.log("getUserTrans");
        const result = await fetch(`/transactions/user/${cid}`)
        const cTransArr = await result.json();
        console.log("cTransArr",cTransArr);
        setCurrentTransArr(cTransArr)
             setTransArr( cTransArr);
             console.log("transArr",transArr);
           return transArr;
      };

      useEffect(()=>{
          if(currentCustomerId && show===false){
             getUserTrans(currentCustomerId);
            setShow(false)
          }
          // if(!show){
          //       getAllTrans();
          //   }
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

        setAddTran(false); 
        setCurrentTransId(transArr._id);
        setCurrentTransArr(transArr);
        setModalUpdate(<UpdateTrans transArr={transArr} formData={() => formData} handleSubmit={(formData)=>handleSubmit(formData)} />)
     
        setShow(true);
        setShowModal('d-block');
        //modal.current.style.display = 'block';

      };

      const closeModify = (transArr) => {
        setShow(false);
        setShowModal('d-none');
        //modal.current.style.display = 'none';
      }

    //   const handleModify = (formArr) => {
    //     fetch('/transactions/update/')
    //     .then(result => result.json())
    //     .then(body => {
    //       console.log("body",body);
    //       setTransArr(  [...body]);
    
    //     })
    //   };

    const addTransaction = () => {
       setAddTran(true);
       setCurrentTransArr([]);
       setCurrentTransId('0');
       setModalUpdate(<AddTrans userId={currentCustomerId} formData={formData} handleSubmit={(formData)=>submitAdd(formData)} />);
        setShow(true);
        setShowModal('d-block');
    }

      const handleSubmit = async (formObj) => {
       // e.preventDefault();
        //console.log("e.target.value", e.target.value);
        console.log("handleSubmit formObj", formObj);
        //transArr()
        //const formData =  e.target.value ;
        //const formData = formObj;
        const requestOptions = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formObj)
        };

        const response = await fetch("/transactions/update", requestOptions)
        const transarr = await response.json();
          console.log("transarr", transarr)
          getUserTrans(transarr.customer_id);
          closeModify();

      };
    
      const submitAdd = async (formObj) => {
        console.log("submitAdd formObj", formObj);
        const formData = formObj;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        };

      const tran = await fetch("/transactions", requestOptions)
      try {
        console.log("success tran",tran);
        setShow(false)
      } catch (e) {
        console.log(" error",e);
         }
      //     .then(response => response.json())
      //     .then(res => {
      //         console.log(res);
      //           return true;
      //       })
      //     .then( (success) => {
      //         console.log("success",success);
      //         setShow(false)
      //       });
      // };

      }
      //
     // console.log('currentTransArr', currentTransArr);
// console.log('addTran', addTran);
//       let modalUpdate = null;
//       if( addTran ) {
//           modalUpdate = <AddTrans userId={currentCustomerId} formData={formData} handleSubmit={(formData)=>submitAdd(formData)} />;
//       } else {
//         console.log('currentTransArr', currentTransArr);
//           modalUpdate = <UpadteTrans transArr={currentTransArr} formData={formData} handleSubmit={(formData)=>handleSubmit(formData)} />;
     
//       }


     let transactionArr = (transArr)? transArr.map( (trans) => {
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
      )}): <p className="card"  >This Customer Do Not have any transactions</p>;

    return (
            <>
              <Modal  show={show} showModal={showModal}   modalClosed={closeModify} >
                   {modalUpdate}
              </Modal>
                <div className="cards">
                    {transactionArr} 
                </div>
                <button className="btn modify" onClick={addTransaction}>Add Transaction</button>
          </>
    )}

export default Transactions;