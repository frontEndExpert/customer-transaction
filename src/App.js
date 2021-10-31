import React, {useState, useEffect} from 'react';
import './App.scss';
import Modal from './components/modal/modal';
import Transactions from './components/transactions/transactions'
//import * as usersObj from './db/data.json';

/* type transaction = {
  "transaction_id": string;
  "customer_id": string;
  "currency": string;
  "amount": string;
  "description": string;
}
*/
/* type User = {
    "customer_id": string;
    "first_name": string;
    "last_name": string;
    "email": string;
    "gender": string;
    "country": string;
    "city": string;
    "street": string;
    "phone": string;
    "total_price": string;
    "currency": string;
    "cerdit_card_type": string;
    "cerdit_card_number": string;
}
*/

function App() {

const [users, setUsers] = useState([
  {
    "customer_id": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "country": "",
    "city": "",
    "street": "",
    "phone": "",
    "total_price": "",
    "currency": "",
    "cerdit_card_type": "",
    "cerdit_card_number": "",
  }]);
const [transArr, setTransArr] = useState({
  "transaction_id": "",
        "customer_id": "",
        "description": "",
        "currency": "",
        "amount": "",
        "cerdit_card_type": "",
        "cerdit_card_number": "",
})

const[showModal, setShowModal] = useState(false);
const [currentTransId, setCurrentTransId] = useState(0);
//console.log("users.length",users.length);



 const getUsers = () => {
  console.log("getUsers");
  fetch('/users')
    .then(result => result.json())
    .then(body => {
      setUsers(JSON.parse((body)));
    })
};

const handleSubmit = () => {
  console.log('hello');
}



/*
useEffect(()=>{
  getUsers()
  
}, []);
*/
let transObj = [{}];
console.log("JSON.parse(transArr)",JSON.parse(transArr));

transObj = (transArr)? transArr : [{_id: "",
customer_id: "",
description: "",
currency: "",
amount: "",
cerdit_card_type: "",
cerdit_card_number: ""
}] ;
//&& transArr[0].transaction_id
console.log("useEffect transObj", transObj);
  

  return (
    <>
    <div className="App">
      <Transactions  />
    </div>
    </>
  );

}

export default App;
