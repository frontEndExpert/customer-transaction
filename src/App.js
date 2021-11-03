import React, {useState, useEffect} from 'react';
import './App.scss';
import Modal from './components/modal/modal';
import Transactions from './components/transactions/transactions';
import Users from './components/users/users';
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
const [showCustomers, setShowCustomers] = useState(true);
const [customerId, setCustomerId] = useState(true);
//console.log("users.length",users.length);


const getCustomers = () => {
  setShowCustomers(true);
  return null
}
const getTransactions = () => {
  setShowCustomers(false);

  return null
}

const openTransaction = (userId) => {
  setShowCustomers(false);
  setCustomerId(userId);
}


  return (
    <>
    <div className="App">
    {showCustomers && <Users  openModalTransaction={(userId) => openTransaction(userId)}  /> }
    { !showCustomers && <Transactions cid={customerId} />}
    </div>
    </>
  );

}

export default App;
