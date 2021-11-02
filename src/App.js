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
//console.log("users.length",users.length);


const getCustomers = () => {
  setShowCustomers(true);
  return null
}
const getTransactions = () => {
  setShowCustomers(false);
  return null
}



  return (
    <>
    <div className="App">
      <button name="customers" onClick={getCustomers} >All Customers</button>
      <button name="transactions" onClick={getTransactions} >All Transactions</button>
    {showCustomers && <Users   /> }
    { !showCustomers && <Transactions  />}
    </div>
    </>
  );

}

export default App;
